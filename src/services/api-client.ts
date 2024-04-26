import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count: Number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'e69ae846e56c4e6d8d998e0f1433f4dc'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }

    get = (id: number | string) =>{
        return axiosInstance
            .get<T>(this.endpoint + '/' + id)
            .then(res => res.data)
    };
}

export default APIClient;