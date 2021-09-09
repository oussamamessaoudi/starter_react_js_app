import { IAuthentication } from './Authentification/models';
import { AuthenticationServer } from './Authentification/server';
import { AuthenticationStandalone } from './Authentification/standalone';
import { IEnvironment } from '../../Env'


export interface IClient {
    readonly authentication: IAuthentication;
}

export default class Client implements IClient {
    authentication: IAuthentication;

    constructor(config: IEnvironment) {
        if(config.STANDALONE){
            this.authentication = new AuthenticationStandalone(config.AUTH_API);
        }else{
            this.authentication = new AuthenticationServer(config.AUTH_API);
        }
    }
}
