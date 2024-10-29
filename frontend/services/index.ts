import auth from "./Users/auth/index";
import info from "./Users/info/index";

const API = {
    auth: {
        login: auth.login,
        register: auth.register,
    },
    info: {
        getMyProfile: info.getMyProfile,
        getUserByUsername: info.getUserByUsername,
    }
};

export default API;