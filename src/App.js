import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
      <Routes>
        <Route index element={<HomePage isLoggedIn={isLoggedIn} />} />
        {isLoggedIn && (
          <>
            <Route path="/login" element={<Navigate to="/" />} />
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
