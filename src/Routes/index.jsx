import { Route, Switch } from "react-router-dom";
import { Home } from "../Pages/Home/index";
import { Login } from "../Pages/Login/index";
import { Register } from "../Pages/Register/index";

const Routes = ({
  verifiedToken,
  setVerifiedToken,
  userCurrent,
  setUserCurrent,
  setTechsCurrent,
  techsCurrent,
  setModalRegister,
  setModalRemoved,
  setKeyInit,
  keyEnd,
  keyInit,
  setKeyEnd,
  modalRegisterIsTrue,
  modalRemovedIsTrue,
}) => {
  return (
    <Switch>
      {verifiedToken && (
        <Route path="/home">
          <Home
            setUserCurrent={setUserCurrent}
            verifiedToken={verifiedToken}
            userCurrent={userCurrent}
            setModalRegister={setModalRegister}
            setModalRemoved={setModalRemoved}
            techsCurrent={techsCurrent}
            setTechsCurrent={setTechsCurrent}
            setKeyInit={setKeyInit}
            keyEnd={keyEnd}
            keyInit={keyInit}
            setKeyEnd={setKeyEnd}
            modalRegisterIsTrue={modalRegisterIsTrue}
            modalRemovedIsTrue={modalRemovedIsTrue}
          />
        </Route>
      )}
      <Route exact path="/">
        <Login
          verifiedToken={verifiedToken}
          setVerifiedToken={setVerifiedToken}
          setUserCurrent={setUserCurrent}
          userCurrent={userCurrent}
          techsCurrent={techsCurrent}
          setTechsCurrent={setTechsCurrent}
        />
      </Route>
      <Route path="/register">
        <Register verifiedToken={verifiedToken} />
      </Route>
    </Switch>
  );
};

export { Routes };
