import {Api} from "../utils";
import { IAuthentication, IUser } from "./models";



export  class AuthenticationStandalone extends Api implements IAuthentication{

    readonly baseUrl?: string;

    constructor(contentBaseUrl?: string) {
        super();
        this.baseUrl = contentBaseUrl;
    }

    authenticate = (username: string, password: string) => super.requestOffline<IUser>({
        username: "admin",
        roles: ["admin"],
        token: "token"
    })

}

