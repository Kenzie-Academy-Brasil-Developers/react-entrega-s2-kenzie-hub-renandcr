import { ButtonStyle } from "../../Components/Button/styled";
import { StyleInput } from "../../Components/Input/styled";
import { LoginDiv, LoginLogo, LoginSection } from "./styled";
import Logo from "../../Assets/Img/Logo.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import { Api } from "../../Services/Api";
import { toast } from "react-toastify";

const Login = ({ setVerifiedToken, verifiedToken, setTechsCurrent }) => {
  const schema = yup.object({
    email: yup.string().required("Digite seu e-mail").email("E-mail inválido"),
    password: yup
      .string()
      .required("Digite sua senha")
      .min(6, "Senha incorreta"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmit = (item) => {
    Api.post("/sessions", item)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@kenzieHub:token", token);
        localStorage.setItem("@kenzieHub:user", JSON.stringify(user));
        setTechsCurrent([...user.techs]);
        setVerifiedToken(true);

        return history.push("/home");
      })
      .catch((_) => {
        toast.error("Erro ao tentar fazer o login, tente novamente");
      });
  };

  if (verifiedToken) {
    return <Redirect to="/home" />;
  }

  return (
    <LoginSection>
      <LoginLogo>
        <img src={Logo} alt="Logo Kenzie Hub"></img>
      </LoginLogo>
      <LoginDiv>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <StyleInput
            placeholder="Digite aqui seu e-mail"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <label>Senha</label>
          <StyleInput
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <ButtonStyle type="submit" primary>
            Entrar
          </ButtonStyle>
          <h4>Você ainda não possui uma conta?</h4>
        </form>
        <ButtonStyle onClick={() => history.push("/register")} grey-1>
          Cadastre-se
        </ButtonStyle>
      </LoginDiv>
    </LoginSection>
  );
};

export { Login };
