import faker  from "faker"

import {Api} from "../utils";
import { IAuthentication, IUser } from "./models";

export  class AuthenticationStandalone extends Api implements IAuthentication{

    readonly baseUrl?: string;

    constructor(contentBaseUrl?: string) {
        super();
        this.baseUrl = contentBaseUrl;
    }

    authenticate = (username: string, password: string) => super.requestOffline<IUser>({
        username: faker.internet.userName(),
        roles: ["admin"],
        token: faker.datatype.uuid()
    })

}

