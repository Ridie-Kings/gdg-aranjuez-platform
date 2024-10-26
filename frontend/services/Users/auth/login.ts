import axios from "axios";

export const login = async (email: string, pass: string, userAgent: string) => {
    try {
        const response = await axios.post(`localhost:3300/auth/login/`, {
            email: email,
            password: pass
        }, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': userAgent
            }
        });
        return {
            success: true,
            data: response.data
        };
    } catch (error: any) {
        console.error("Login Request Error:", error);
        return {
            success: false,
            data: error.response.data
        };
    }
}
