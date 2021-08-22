import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <p
     className="navHover"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      SignUp
    </p>
  );
};

export default SignupButton;