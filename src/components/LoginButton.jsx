//1.
import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; 

const LoginButton = () => {
  //2.
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

//3.
export default LoginButton;
