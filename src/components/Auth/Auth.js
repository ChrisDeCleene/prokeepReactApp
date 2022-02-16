import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ setIsLoggedIn }) => {
  let navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!enteredEmail.includes("@")) {
      setError("The email you input is invalid.");
      return;
    }
    if (enteredPassword.length < 5) {
      setError("The password you entered must contain 5 or more characters.");
      return;
    }

    let url = "https://reqres.in/api/login";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        if (jsonResponse.error) {
          // TODO create some sort of error alert on the screen
          return alert(jsonResponse.error);
        }
        if (jsonResponse.token) {
          setIsLoggedIn(true);
          setEnteredEmail("");
          setEnteredPassword("");
          navigate("/profile", { replace: true });
        }
      });
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
            onChange={(e) => {
              setEnteredEmail(e.target.value);
              if (error) {
                setError();
              }
            }}
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
            value={enteredPassword}
            onChange={(e) => {
              setEnteredPassword(e.target.value);
              if (error) {
                setError();
              }
            }}
            placeholder="Password"
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="form-actions">
          <button>Login</button>
        </div>
      </form>
    </section>
  );
};

export default Auth;
