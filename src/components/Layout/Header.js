import ProkeepLogo from "../../assets/prokeep-logo-reversed.svg";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <header>
      <img src={ProkeepLogo} alt="Logo" />

      <nav>
        {!isLoggedIn ? (
          <a href="/">Login</a>
        ) : (
          <button className="form-btn"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("expiresIn");
              setIsLoggedIn((prevState) => !prevState);
            }}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
