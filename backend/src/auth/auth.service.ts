import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ResponseDto } from 'src/response.dto';
import { UserDto } from 'src/users/user.dto';
import { UserEntity } from 'src/users/user.entity';
import { UserService } from 'src/users/user.service';
import { compare, hash } from 'bcrypt';
import * as jwt from 'jsonwebtoken';

interface TokenPayload {
    sub: string;
    username: string;
    email: string;
}

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private configService: ConfigService
    ) { }

    public get jwtSecret(): string {
        return this.configService.get<string>('JWT_SECRET') ?? 'defaultSecret';
    }

    async checkUserExists(username: string, email: string): Promise<boolean> {
        const [userByEmail, userByUsername] = await Promise.all([
            this.usersService.findOne({ where: { email } }),
            this.usersService.findOne({ where: { username } })
        ]);

        return !(userByEmail || userByUsername);
    }

    async createUser(user: UserDto): Promise<ResponseDto> {
        const userExists = await this.checkUserExists(user.username, user.email);

        if (!userExists) {
            return { success: false, data: { code: 409, message: 'User already exists.' } };
        }

        try {
            const newPass = await hash(user.password, 10);

            const newUser = await this.usersService.create({ ...user, password: newPass }) as UserEntity;

            const token = this.generateToken(newUser);

            return { success: true, data: { code: 201, message: 'User created successfully', token } };
        } catch (error) {
            return { success: false, data: { code: 500, message: error.message } };
        }
    }

    async validateUser(email: string, password: string): Promise<UserEntity | null> {
        const user = await this.usersService.findOne({ where: { email: email } }) as UserEntity;
        if (!user) return null;

        const isPasswordValid = await compare(password, user.password);
        return isPasswordValid ? user : null;
    }

    async login(email: string, password: string): Promise<ResponseDto> {
        const user = await this.validateUser(email, password);

        if (!user) return { success: false, data: { code: 401, message: 'Invalid credentials' } };

        const token = this.generateToken(user);

        return { success: true, data: { code: 200, message: 'Login successful', token, user } };
    }

    async logout(): Promise<ResponseDto> {

        return { success: true, data: { code: 200, message: 'Logout successful' } };
    }

    private generateToken({ uuid, username, email }: UserEntity): string {
        const payload: TokenPayload = {
            sub: uuid,
            username: username,
            email: email
        };

        return jwt.sign(payload, this.jwtSecret, {
            expiresIn: '1d',
            algorithm: 'HS256'
        });
    }


    verifyToken(token: string): TokenPayload {
        try {
            return jwt.verify(token, this.jwtSecret) as TokenPayload;
        } catch (error) {
            throw new UnauthorizedException(error.name === 'TokenExpiredError' ? 'Token expired' : 'Invalid token');
        }
    }
}
