import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import AccountBox from "./signinBox/AccountBox";
const AppContainer = styled.div`
  width: 100%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function SignIn() {
  const[{ user , token  }, dispatch] = useStateValue();
  // const[user,setUser] = useState('');

  useEffect(() => {
   const data = localStorage.getItem('username');
   if(data){
    dispatch({
      type: actionTypes.SET_USER,
      user:data,
    })
   }
  },[])
  useEffect(() => {
    if(user){
    localStorage.setItem('username', user);
    localStorage.setItem('tokens', token);
  }
  })
    
  return (
    <div>    
      { user ?( 
        <Redirect to='/dashboard' />
      )
      :(
      <AppContainer>
        <AccountBox />
      </AppContainer>
      )}
    </div>
  );
}

export default SignIn;
