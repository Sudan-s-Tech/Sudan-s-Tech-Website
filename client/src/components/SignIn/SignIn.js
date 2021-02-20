import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
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
    
  return (
    <div>    
      <Navbar />
      <AppContainer>
        <AccountBox />
      </AppContainer>
    </div>
  );
}

export default SignIn;
