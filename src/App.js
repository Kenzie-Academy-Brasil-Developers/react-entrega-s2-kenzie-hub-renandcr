import { GlobalStyle } from "./Assets/GlobalStyle/global";
import { Routes } from "./Routes/index";
import { Header } from "./Components/Header/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {
  const [verifiedToken, setVerifiedToken] = useState(false);
  const [userCurrent, setUserCurrent] = useState([]);
  const [techsCurrent, setTechsCurrent] = useState([]);

  const [keyInit, setKeyInit] = useState("");
  const [keyEnd, setKeyEnd] = useState("");

  const [modalRegisterIsTrue, setModalRegister] = useState(false);
  const [modalRemovedIsTrue, setModalRemoved] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");
    token && setVerifiedToken(true);
  }, [verifiedToken]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {verifiedToken && <Header setVerifiedToken={setVerifiedToken} />}
      <main>
        <GlobalStyle />
        <Routes
          verifiedToken={verifiedToken}
          setVerifiedToken={setVerifiedToken}
          userCurrent={userCurrent}
          setUserCurrent={setUserCurrent}
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
      </main>
    </>
  );
}

export default App;
