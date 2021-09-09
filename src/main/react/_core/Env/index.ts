

export interface IEnvironment {
    readonly STANDALONE?: boolean
    readonly AUTH_API?: string
}

class Environment implements IEnvironment{

    static readonly INSTANCE: Environment = new Environment()

    readonly STANDALONE?: boolean
    readonly AUTH_API?: string

    private constructor() {
        this.STANDALONE = process.env.REACT_APP_STANDALONE === "TRUE"
        this.AUTH_API = process.env.REACT_APP_AUTH_API
    }

}
const Env = Environment.INSTANCE

export {
    Env
}
