import React, { useContext, useState } from 'react'
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
import axios from "axios";

function SignupForm() {
    const { switchToSignin } = useContext(AccountContext);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [password, setpassword] = useState("");
    const [msg, setmsg] = useState("");

    const signup = () => {
      let content = {
        name: name,
        email: email,
        phone: phone,
        password: password,
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
            setmsg('Account created please sign in to continue')
          }
        })
        .catch((err) => {
         if(err.response){
              // console.log(err.response.data)
          // console.log(err.response.status)
          // console.log(err.response.headers)
           setmsg(err.response.data.message)
         }
        });
    };
    return (
        <BoxContainer>
        <FormContainer>
          <Input
            type="text"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            placeholder="Full Name"
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="Email"
          />
          <Input
            type="number"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
            placeholder="Number"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="Password"
          />
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
      {/* <Marginer direction="vertical" margin="1em" /> */}
      <p style={{ color: "red",marginBottom:'0px',fontSize:'small',overflow:'hidden' }}>{msg}</p>
      <Marginer direction="vertical" margin="1em" />
      </BoxContainer>
    )
}

export default SignupForm
