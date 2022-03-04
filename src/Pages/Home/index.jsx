import { Card } from "../../Components/Card";
import { HomeSection, HomeDiv, HomeDivGreetings, HomeHr } from "./styled";
import ButtonPlus from "../../Assets/Img/ButtonPlus.png";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import { Api } from "../../Services/Api";
import { ModalRegister } from "../ModalRegister";
import { ModalRemoved } from "../ModalRemoved";

const Home = ({
  verifiedToken,
  userCurrent,
  setModalRegister,
  setModalRemoved,
  techsCurrent,
  setUserCurrent,
  setTechsCurrent,
  setKeyInit,
  keyEnd,
  keyInit,
  setKeyEnd,
  modalRegisterIsTrue,
  modalRemovedIsTrue,
}) => {
  useEffect(() => {
    if (localStorage.getItem("@kenzieHub:user")) {
      const idUser = JSON.parse(localStorage.getItem("@kenzieHub:user"));
      const user = JSON.parse(localStorage.getItem("@kenzieHub:user"));

      Api.get(`/users/${idUser.id}`).then((response) => {
        setTechsCurrent([...response.data.techs]);
        setUserCurrent(user);
      });
    }
  }, []);

  if (!verifiedToken) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {
        <HomeDivGreetings>
          <h2>Olá, {userCurrent.name}</h2>
          <h3>{userCurrent.course_module}</h3>
        </HomeDivGreetings>
      }
      {modalRegisterIsTrue && (
        <ModalRegister
          setTechsCurrent={setTechsCurrent}
          setModalRegister={setModalRegister}
          techsCurrent={techsCurrent}
        />
      )}
      {modalRemovedIsTrue && (
        <ModalRemoved
          setModalRemoved={setModalRemoved}
          keyInit={keyInit}
          setKeyEnd={setKeyEnd}
          setTechsCurrent={setTechsCurrent}
          techsCurrent={techsCurrent}
        />
      )}
      <HomeHr />
      <HomeSection>
        <div>
          <div className="home-div-tecnologies">
            <h4>Tecnologias</h4>
            <img
              onClick={() => setModalRegister(true)}
              src={ButtonPlus}
              alt="Botão de adicionar"
            />
          </div>
          <HomeDiv>
            {techsCurrent.length > 0 &&
              techsCurrent.map((current, index) => (
                <Card
                  key={index}
                  current={current}
                  setModalRemoved={setModalRemoved}
                  setKeyInit={setKeyInit}
                  keyEnd={keyEnd}
                />
              ))}
          </HomeDiv>
        </div>
      </HomeSection>
    </>
  );
};

export { Home };
