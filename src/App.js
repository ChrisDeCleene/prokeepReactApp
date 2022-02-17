import { useEffect, useState } from "react";

import Layout from "./components/Layout/Layout";
import Auth from './components/Auth/Auth'
import Profile from './components/Profile/Profile'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for token and if expiresIn has not expired
    let token = JSON.parse(localStorage.getItem("token"));
    let expiresIn = JSON.parse(localStorage.getItem("expiresIn"));
    if (
      token !== null &&
      new Date(expiresIn).getTime() - new Date().getTime() > 0
    ) {
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("expiresIn");
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
      {isLoggedIn ? (
        <Profile />
      ) : (
        <Auth isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </Layout>
  );
}

export default App;
