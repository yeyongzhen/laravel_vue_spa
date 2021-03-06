import Axios from "axios";

export function login(credentials) {
    return new Promise((res,rej) => {
        Axios.post('/api/auth/login', credentials)
            .then((response) => {
                console.log(response);
                res(response.data)
            })
            .catch((err) => {
                rej("Wrong email or password");
            })
    })
}


export function getLocalUser() {
    const userStr = localStorage.getItem("user");

    if(!userStr) {
        return null;
    }

    return JSON.parse(userStr);
}
