import axios from "axios";

export const getApi = axios.create({
    baseURL : "https://api.ryzendesu.vip/api/downloader/",
    timeout : 5000,
    headers : {
        "Content-Type" : "application/json",
    }
})