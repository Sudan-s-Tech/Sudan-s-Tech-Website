import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./AccountContext";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common";
import { Marginer } from "./Marginer";
import axios from "axios";
import { useStateValue } from "../../../StateProvider";
import { actionTypes } from "../../../reducer";
import { auth, provider } from "../../../firebase";

function LoginForm() {
  const [{}, dispatch] = useStateValue();
  const { switchToSignup } = useContext(AccountContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [msg, setmsg] = useState("");

  const googleSignin = () => {
    console.log("clicked");
    auth
      .signInWithPopup(provider)
      .then((res) => {
     dispatch({
      type: actionTypes.SET_USER,
      user: res.user.displayName,
     })
      }
      )
      .catch((err) => alert(err.message));
    };
  const signin = () => {
    let content = {
      email: email,
      password: password,
    };
    axios({
      method: "post",
      url: "https://sudan-tech-backend.herokuapp.com/users/login",
      data: content,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        dispatch({
          type: actionTypes.SET_USER,
          user: res.data.user.name,
          token: res.data.token,
        });
        //  setToken(res.data.token)
      })
      .catch((e) => {
        console.log(e);
        if (email === "") {
          setmsg("Email cant be empty");
        } else if (password === "") {
          setmsg("Password cant be empty");
        } else {
          setmsg("Email or Password is incorrect");
        }
      });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
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
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={signin}>
        Signin
      </SubmitButton>
      <Marginer direction="vertical" margin="0.5em" />
      <SubmitButton  type="submit" onClick={googleSignin}>
        Signin with google
      </SubmitButton>
      <Marginer direction="vertical" margin="0.8em" />
      <MutedLink>
        Don't have an account?
        <BoldLink onClick={switchToSignup}>Signup</BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <p
        style={{
          color: "red",
          marginBottom: "0px",
          fontSize: "small",
          overflow: "hidden",
        }}
      >
        {msg}
      </p>
      <Marginer direction="vertical" margin="0.6em" />
    </BoxContainer>
  );
}

export default LoginForm;
