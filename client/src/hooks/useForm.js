// write your custom hook here to control your checkout form
import {useState} from 'react';


export const useForm = (initialValue) => {
    const [values, setValues]=useState(initialValue);

    const handleChanges = (evt)=>{
        setValues({...values, [evt.target.name]: evt.target.value });

        return [values, handleChanges ]
    }
}
