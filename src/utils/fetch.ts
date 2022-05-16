import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export default async function AxiosAPI(config: AxiosRequestConfig) {
    return axios(config)
        .then((res: AxiosResponse) => res.data)
        .catch((err: AxiosError) => err);
}
