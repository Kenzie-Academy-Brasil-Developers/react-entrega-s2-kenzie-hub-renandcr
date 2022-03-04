import { ButtonStyle } from "../../Components/Button/styled";
import { StyleInput } from "../../Components/Input/styled";
import { SelectStyle } from "../../Components/Select/styled";
import { ModalRegisterSection, ModalRegisterDiv } from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../Services/Api";
import { toast } from "react-toastify";

const ModalRegister = ({ setModalRegister, setTechsCurrent, techsCurrent }) => {
  const schema = yup.object({
    title: yup.string(),
  });

  const { handleSubmit, register } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (tech) => {
    const token = localStorage.getItem("@kenzieHub:token");
    Api.post("/users/techs", tech, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setTechsCurrent([...techsCurrent, response.data]);
        toast.success("Tecnologia cadastrada com sucesso");
      })
      .catch((_) =>
        toast.error("Erro ao tentar cadastrar tecnologia, tente novamente")
      );
  };

  return (
    <ModalRegisterSection>
      <div className="modal-div-title">
        <h1>Cadastrar Tecnologia</h1>
        <span onClick={() => setModalRegister(false)}>x</span>
      </div>
      <ModalRegisterDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="modalRegister-label-name">Nome</label>
          <StyleInput {...register("title")} />
          <label>Selecionar status</label>
          <SelectStyle {...register("status")}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </SelectStyle>
          <ButtonStyle type="submit" primary>
            Cadastrar Tecnologia
          </ButtonStyle>
        </form>
      </ModalRegisterDiv>
    </ModalRegisterSection>
  );
};

export { ModalRegister };
