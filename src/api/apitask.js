import Axios from "axios";
import { AsyncStorage } from 'react-native'
import { BACKEND } from "../defaults/url_backend";

export const api = () => Axios.create({
    baseURL: BACKEND,
    headers: {
        'Content-type': 'application/json',
        'authorization': AsyncStorage.getItem("@jwt")
    }
})


export const apiAuth = () => Axios.create({
    baseURL: BACKEND,
    headers: {
        'Content-type': 'application/json'
    }
})