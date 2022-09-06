import "./App.css";
import "./pages/registration/registrationForm.css";
import RegistrationForm from "./pages/registration/RegistrationForm";
import OwnHomePage from "./pages/ownHomePage/OwnHomePage";
import React, { useState, Fragment } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logInHandler = () => {
    setIsLoggedIn(true);
  };
  const logOutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <Fragment>
      {!isLoggedIn && <RegistrationForm onClick={logInHandler} />}
      {isLoggedIn && <OwnHomePage onClick={logOutHandler} />}
    </Fragment>
  );
}

export default App;
