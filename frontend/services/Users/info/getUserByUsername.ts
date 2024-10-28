import axios from "axios";
import server from "@/server.config";

export const getUserByUsername = async (token: string, username: string) => {
    try {
        const response = await axios.get(`${server}/users/${username}/`, {
            headers: {
                Authorization: token,
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
