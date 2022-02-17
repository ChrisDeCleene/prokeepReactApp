import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";

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
      <Routes>
        <Route index element={<HomePage isLoggedIn={isLoggedIn} />} />
        {isLoggedIn && (
          <>
            <Route path="/login" element={<Navigate to="/profile" />} />
            <Route path="/profile" element={<ProfilePage />} />
          </>
        )}
        {!isLoggedIn && (
          <>
            <Route
              path="/login"
              element={
                <AuthPage
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route path="/profile" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Layout>
  );
}

export default App;
