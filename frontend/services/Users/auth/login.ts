import axios from "axios";
import  server  from "@/server.config";

export const login = async (email: string, pass: string, userAgent: string) => {
    try {
        const response = await axios.post(`${server}/auth/login/`, {
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
        console.error("Login Request Error:", error);
        return {
            success: false,
            data: error.response.data
        };
    }
}
