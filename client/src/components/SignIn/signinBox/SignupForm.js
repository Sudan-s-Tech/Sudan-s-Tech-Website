import React, { useContext} from 'react'
import { AccountContext } from './AccountContext';
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
  } from "./Common";
import { Marginer } from './Marginer';
import useForm from './useForm'
import validator from './validator'
import './signin.css'

function SignupForm() {
    const { switchToSignin } = useContext(AccountContext);
    const{handleChange, values , signup , errors} = useForm(validator)
    return (
        <BoxContainer>
        <FormContainer>
          <Input
          name='name'
            type="text"
            onChange={handleChange} value={values.name}
            placeholder="Full Name"
          />
         {errors.name && <p className='error_msg'>{errors.name}</p>}
          <Input
          name='email'
            type="email"
            onChange={handleChange} value={values.email}
            placeholder="Email"
          />
         {errors.email && <p className='error_msg'>{errors.email}</p>}
          <Input
          name='phone'
           onChange={handleChange} value={values.phone}
            placeholder="Number"
          />
         {errors.phone && <p className='error_msg'>{errors.phone}</p>}
          <Input
          name='password'
            type="password"
            onChange={handleChange} value={values.password}
            placeholder="Password"
          />
         {errors.password && <p className='error_msg'>{errors.password}</p>}
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" onClick={signup}>
          Signup
        </SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink style={{overflow:'hidden'}}>
          Already have an account?
          <BoldLink onClick={switchToSignin}>Signin</BoldLink>
        </MutedLink>
      {/* <p style={{ color: "red",marginBottom:'0px',fontSize:'small',overflow:'hidden' }}>{msg}</p> */}
      <Marginer direction="vertical" margin="1em" />
      </BoxContainer>
    )
}

export default SignupForm
