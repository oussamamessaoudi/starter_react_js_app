import {useState} from "react";


export   function useInput<T> (initialValue : T) : [T, (event : any) => void , (value: T) => void] {
    const [value, onChange] = useState<T>(initialValue);

    const onChangeTarget = (event: any) => {
        onChange(event.currentTarget.value);
    };

    return ([
        value,
        onChangeTarget,
        onChange
    ])
}
export function useCheck(initialValue : boolean): [boolean, (value: boolean) => void, () => void]  {
    const [value, _, onChange] = useInput<boolean>(initialValue)
    const onInverse = () =>{
        onChange(!value);
    }
    return([
        value,
        onChange,
        onInverse
    ])

}
