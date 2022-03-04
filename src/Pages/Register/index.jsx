import { RegisterSection, RegisterLogo, RegisterDiv } from "./styled";
import { ButtonStyle } from "../../Components/Button/styled";
import { StyleInput } from "../../Components/Input/styled";
import { SelectStyle } from "../../Components/Select/styled";
import Logo from "../../Assets/Img/Logo.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../Services/Api";
import { toast } from "react-toastify";
import { useHistory, Redirect } from "react-router-dom";

const Register = ({ verifiedToken }) => {
  const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Senha deve conter no mínimo 6 dígitos"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não conferem")
      .required("Campo obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmit = ({ name, email, bio, contact, password, course_module }) => {
    const user = { name, email, bio, contact, password, course_module };
    Api.post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso");
        history.push("/");
      })
      .catch((_) => {
        toast.error("Falha ao criar a conta, verifique o e-mail");
      });
  };

  if (verifiedToken) {
    return <Redirect to="/home" />;
  }

  return (
    <RegisterSection>
      <RegisterLogo>
        <img src={Logo} alt="Logo da Kenzie Hub" />
        <button onClick={() => history.push("/")} className="button-logo">
          Voltar
        </button>
      </RegisterLogo>
      <RegisterDiv>
        <div>
          <h2>Crie sua conta</h2>
          <h3>Rápido e grátis, vamos nessa</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nome</label>
          <StyleInput
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>

          <label>E-mail</label>
          <StyleInput
            placeholder="Digite aqui seu e-mail"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <label>Bio</label>
          <StyleInput
            placeholder="Digite aqui sua descrição"
            {...register("bio")}
          />
          <p>{errors.bio?.message}</p>

          <label>Contato</label>
          <StyleInput
            placeholder="Digite aqui seu contato"
            {...register("contact")}
          />
          <p>{errors.contact?.message}</p>

          <label>Senha</label>
          <StyleInput
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <label>Confirmar senha</label>
          <StyleInput
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>

          <label>Selecionar módulo</label>
          <SelectStyle {...register("course_module")}>
            <option>Primeiro módulo(Introdução ao Frontend)</option>
            <option>Segundo módulo(Frontend Avançado)</option>
            <option>Terceiro Módulo(Introdução ao Backend)</option>
            <option>Quarto módulo(Backend Avançado)</option>
          </SelectStyle>
          <ButtonStyle type="submit" className="button-register-form" negative>
            Cadastrar
          </ButtonStyle>
        </form>
      </RegisterDiv>
    </RegisterSection>
  );
};

export { Register };
