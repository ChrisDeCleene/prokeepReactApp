import { useNavigate } from "react-router-dom";

const LandingPage = ({ isLoggedIn }) => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        You are {isLoggedIn ? "currently logged in" : "not currently logged in"}
      </p>
      {!isLoggedIn && (
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default LandingPage;
