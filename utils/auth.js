import axios from "axios";

const baseUrl = "https://identitytoolkit.googleapis.com/v1/accounts:";
const key = "AIzaSyCdZwXqQIhcZVsI8BJpGPSc6TXFdrWk_aY"


export const authenticate = async (mode,email,password) => {
    const url = `${baseUrl}${mode}?key=${key}`;
    const response = await axios.post(`${baseUrl}${mode}?key=${key}`, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    const token = response.data.idToken;
    return token;
}