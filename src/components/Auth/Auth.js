import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ setIsLoggedIn }) => {
  let navigate = useNavigate();
  return (
    <>
      <div>AuthPage</div>
      <button
        onClick={() => {
          setIsLoggedIn(true);
          navigate("/profile", { replace: true });
        }}
      >
        Login
      </button>
    </>
  );
};

export default Auth;
