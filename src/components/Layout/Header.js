import ProkeepLogo from "../../assets/prokeep-logo-reversed.svg";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <header>
      <img src={ProkeepLogo} style={{ width: 300 }} alt="Logo" />

      <nav>
        <ul>
          {!isLoggedIn ? (
            <li>
              <a href="/">Login</a>
            </li>
          ) : (
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
