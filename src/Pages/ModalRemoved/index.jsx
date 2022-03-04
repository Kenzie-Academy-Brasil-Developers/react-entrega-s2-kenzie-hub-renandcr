import { ButtonStyle } from "../../Components/Button/styled";
import { StyleInput } from "../../Components/Input/styled";
import { SelectStyle } from "../../Components/Select/styled";
import { Api } from "../../Services/Api";
import { ModalRemovedSection, ModalRemovedDiv } from "./styled";
import { toast } from "react-toastify";
const ModalRemoved = ({
  setModalRemoved,
  keyInit,
  setTechsCurrent,
  techsCurrent,
}) => {
  const removeTech = () => {
    const token = localStorage.getItem("@kenzieHub:token");
    Api.delete(`/users/techs/${keyInit}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((_) => {
        const filter = techsCurrent.filter((current) => current.id !== keyInit);
        setTechsCurrent(filter);
        toast.success("Tecnologia excluída com sucesso");
      })
      .catch((_) => toast.error("Erro ao tentar excluir tecnologia"));
  };

  const preventSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <ModalRemovedSection>
      <div className="modal-div-title">
        <h1>Tecnologia Detalhes</h1>
        <span onClick={() => setModalRemoved(false)}>x</span>
      </div>
      <ModalRemovedDiv>
        <form onSubmit={preventSubmit}>
          <label className="modalRegister-label-name">Nome</label>
          <StyleInput />
          <label>Selecionar status</label>
          <SelectStyle>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </SelectStyle>
          <div className="modalRemoved-div-buttons">
            <ButtonStyle className="modalRemoved-button-negative" negative>
              Savar alterações
            </ButtonStyle>
            <ButtonStyle
              className="modalRemoved-button-grey"
              grey-0
              onClick={removeTech}
            >
              Excluir
            </ButtonStyle>
          </div>
        </form>
      </ModalRemovedDiv>
    </ModalRemovedSection>
  );
};

export { ModalRemoved };
