import axios from "axios"
const API_HOST = process.env.API_HOST;

export const isLogin = (token) => {
    return axios.post(`${API_HOST}/api/ecosaas/ci/loginInfo/loginInfo`,{authorization:token})
}

