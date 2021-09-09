import axios from "axios";

export class Api {
    requestOffline<T>(data: T, status ?: number): Promise<HttpResponse<T>> {
        return new Promise<HttpResponse<T>>(resolve =>
            setTimeout(() => resolve(new HttpResponse<T>(data, status || 200)), 1000),
        );
    }
    onError<R>() {
        return function (error: any) {
            return (new HttpResponse<R>(undefined, error.response.status))
        };
    }
    getRequest<R>(url : string, config : IConfigRequest) : Promise<HttpResponse<R>>{
        return axios.get<number, HttpResponse<R>>(url , config).then((value: any) => new HttpResponse(value.data, value.status),
            this.onError<R>());
    }
    postRequest<T, R>(url : string, data?: T,   config?: IConfigRequest) : Promise<HttpResponse<R>>{
        return axios.post<T, HttpResponse<R>>(url, data, config).then((value: any) => new HttpResponse(value.data, value.status),
            this.onError<R>());
    }
    putRequest<T, R>(url : string, data?: T,   config?: IConfigRequest) : Promise<HttpResponse<R>>{
        return axios.put<T, HttpResponse<R>>(url, data, config).then((value : any) => new HttpResponse(value.data, value.status),
            this.onError<R>());
    }
}
interface IConfigRequest {
    headers?: {
        Authorization ?: string | null
    }
}
export class HttpResponse<T> {
    readonly data?: T;
    readonly status: number;
    constructor(data: T|undefined, status: number) {
        this.data = data;
        this.status = status;
    }
}
export interface IStateApi<T> {
    status: "INITIALIZE"|"LOADING"|"SUCCESS"|"ERROR"
    data?: T
}
