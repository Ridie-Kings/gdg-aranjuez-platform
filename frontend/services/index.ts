import auth from "./Users/auth/index";

const API = {
    auth: {
        login: auth.login,
        register: auth.register,
    },
};

export default API;