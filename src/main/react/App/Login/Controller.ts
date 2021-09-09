import {useCallback, useContext, useState} from "react";

import { Routes } from "../index";
import { useInput } from '../../_core/utils/Hooks'
import { ControllerContext } from '../../_core/Controller'
import { IStateApi } from '../../_core/Controller/Client/utils'



export const useController = () => {
    const [password, setPassword] = useInput("");
    const [username, setUsername] = useInput("");
    const [apiState, setApiState] = useState<IStateApi<string>>({ status: 'INITIALIZE'});
    const controller = useContext(ControllerContext);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        setApiState({ status: 'LOADING'});
        controller?.client.authentication.authenticate(username, password).then(value => {
            if(value.status === 200){
                // save client data token & roles
                controller?.navigate(Routes.Dashboard, value.data)
            }
            else {
                setApiState({ status: 'ERROR'})
            }
        }).catch(() => setApiState({ status: 'ERROR'}))

    }, [controller, password, username]);



    return {
        apiState,
        password,
        setPassword,
        username,
        setUsername,
        handleSubmit
    }

}
