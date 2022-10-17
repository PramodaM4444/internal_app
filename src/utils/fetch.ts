import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export default async function AxiosAPI(config: AxiosRequestConfig) {
    return axios(config)
        .then((res: AxiosResponse) => {
            console.log("ApI response-----", res);
            return res.data;
        })
        .catch((err: AxiosError) => err);
}

export async function LoginAxiosAPI(config: AxiosRequestConfig) {
    return axios(config)
        .then((res: AxiosResponse) => ({
            response: res.data,
            error: undefined,
        }))
        .catch((err: AxiosError) => ({ response: undefined, error: err }));
}
