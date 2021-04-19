import {useState , useContext} from 'react'
import axios from "axios";
import { AccountContext } from './AccountContext';


const useForm = (validator) => {
    const { switchToSignin } = useContext(AccountContext);
    const[values, setValues] = useState({
        name:'',
        email:'',
        phone:'',
        password:''
    })
    const[errors, setErrors] = useState({})

const handleChange = (e)=>{
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })
}
const signup =() =>{
    let content = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            password: values.password,
          }
          axios({
            method: "post",
            url: "https://sudan-tech-backend.herokuapp.com/users/signup",
            data:content,
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              if (res.status === 201) {
                alert('Account created please sign in to continue');
                switchToSignin();
    
              }
            })
            .catch(() => {
    setErrors(validator(values))
            });
}

return{handleChange , values, signup , errors}
}

export default useForm;