import { CardStyle } from "./styled";

const Card = ({ current, setModalRemoved, setKeyInit, keyEnd }) => {
  return (
    <>
      <CardStyle
        onClick={() => {
          setModalRemoved(true);
          setKeyInit(current.id);
        }}
      >
        <h3>{current.title}</h3>
        <h4>{current.status}</h4>
      </CardStyle>
    </>
  );
};

export { Card };
