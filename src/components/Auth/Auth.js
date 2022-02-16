import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Auth = ({ setIsLoggedIn }) => {
  // let navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!enteredEmail.includes("@")) {
      setError("The email you input is invalid!");
      return;
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <input
            type="email"
            aria-label="Email"
            aria-required="true"
            id="email"
            name="email"
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
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
        {error && <p className="form-error">{error}</p>}
        <div className="form-actions">
          <button>Login</button>
        </div>
      </form>
    </section>
  );
};

export default Auth;
