import { Link } from "react-router-dom";
import ProkeepLogo from "../../assets/prokeep-lockup-primary__2_.png";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <header>
      <Link to="/">
        <img src={ProkeepLogo} style={{ width: 300 }} alt="Logo" />
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("expiresIn");
                  setIsLoggedIn((prevState) => !prevState);
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
