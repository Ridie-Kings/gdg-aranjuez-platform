import axios from "axios";
import server from "@/server.config";

export const getMyProfile = async (token: string) => {
    try {
        const response = await axios.get(`${server}/users/@me/`, {
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
