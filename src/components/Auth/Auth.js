import React from "react";
// import { useNavigate } from "react-router-dom";

const Auth = ({ setIsLoggedIn }) => {
  // let navigate = useNavigate();
  return (
    <section>
      <h1>Login</h1>
      <form>
        <div className="form-control">
          <input
            type="email"
            aria-label="Email"
            aria-required="true"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            aria-label="Password"
            aria-required="true"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
      </form>
    </section>
  );
};

export default Auth;
