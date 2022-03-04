import { HeaderStyle } from "./styled";
import Logo from "../../Assets/Img/Logo.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ setVerifiedToken }) => {
  const history = useHistory();
  return (
    <HeaderStyle>
      <div>
        <img src={Logo} alt="Logo Kenzie Hub" />
        <button
          onClick={() => {
            localStorage.clear();
            setVerifiedToken(false);
            history.push("/");
          }}
        >
          Sair
        </button>
      </div>
    </HeaderStyle>
  );
};

export { Header };
