import {Api} from "../utils";
import {IUser, IAuthentication} from "./models";


export  class AuthenticationServer extends Api implements IAuthentication{

    readonly baseUrl?: string;

    constructor(contentBaseUrl?: string) {
        super();
        this.baseUrl = contentBaseUrl;
    }

    authenticate(username: string, password: string) {
        return super.postRequest<any, IUser>(this.baseUrl + "authenticate",
            {username, password},
            undefined).then(value => {
            return value;
        });
    }

}
