import { Fragment } from "react";
import Header from "./Header";

const Layout = ({ isLoggedIn, setIsLoggedIn, children }) => {
  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
