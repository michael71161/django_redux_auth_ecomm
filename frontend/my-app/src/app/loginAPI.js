import axios from 'axios'
const URL = "http://127.0.0.1:8000/api/token/"
const URL_REGISTER = "http://127.0.0.1:8000/api/register/"


export function signin(cred) {

    return new Promise((resolve) =>
        axios.post(URL, cred).then((res) => resolve({ data: res.data }))
    );
}

export function signUp(cred) {
    return new Promise((resolve) =>
        axios.post(URL_REGISTER, cred).then((res) => resolve({ data: res.data }))
    );
}