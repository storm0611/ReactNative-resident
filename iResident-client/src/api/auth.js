import axios from "axios";
import { SERVER_URL } from '../config'

const register = (payload) => axios.post(`${SERVER_URL}/api/auth/register`, payload);

const login = (payload) => axios.post(`${SERVER_URL}/api/auth/login`, payload)
const logout = () => {

};
export default {
    register,
    login,
    logout,
};