import { HttpResponse } from '../utils'

export interface IUser {
    username: string;
    roles: string[];
    token: string;
}
export interface IAuthentication {
    authenticate : (username: string, password: string) => Promise<HttpResponse<IUser>>;
}
