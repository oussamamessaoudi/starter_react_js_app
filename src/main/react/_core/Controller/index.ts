import React from "react";
import Client, {IClient} from "./Client";
import { IUser } from "./Client/Authentification/models";
import { Env, IEnvironment } from "../Env";

export interface IController {
    client: IClient;
    setHistoryEntry(nav: any): void;
    navigate(routeName: string, params?: any): void;
    popNavigate(): void
}

export class Controller implements IController {

    private navigator ?: any
    public readonly client: IClient;
    private _user?: IUser ;


    get user(): IUser | undefined {
        return this._user;
    }
    set user(value : IUser | undefined) {
        this._user = value
        sessionStorage.setItem("user", JSON.stringify(value));
    }

    constructor(config: IEnvironment, user : IUser) {
        this.client = new Client(config);
        this._user = user;
    }

    public static async create(): Promise<IController> {
        const userStringify = sessionStorage.getItem("user");
        const user: IUser = userStringify ? JSON.parse(userStringify): null
        return new Controller(Env, user);
    }

    navigate(routeName: string, params?: any): void {
        this.navigator && this.navigator.push(routeName, params);
    }
    popNavigate(): void {
        this.navigator && this.navigator.goBack();
    }

    setHistoryEntry(nav: any): void {
        this.navigator = nav;
    }

}
export const ControllerContext = React.createContext<IController | undefined>(
    undefined,
);
