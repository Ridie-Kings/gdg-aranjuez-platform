import server from '@/server.config';
import axios from "axios";

export const register = async (username: string, email: string, pass: string, userAgent: string) => {
    try {
        const response = await axios.post(`${server}/auth/register/`, {
            username: username,
            email: email,
            password: pass
        }, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': userAgent
            }
        });
        return response.data
    } catch (error: any) {
        console.error("Register Request Error:", error);
        return {
            success: false,
            data: error.response.data
        };
    }
}
