import styled from "styled-components";
import { grey_1, negative, primary } from "../../Assets/GlobalStyle/global";

const ButtonStyle = styled.button`
  background-color: ${(props) =>
    props.negative ? negative : props.primary ? primary : grey_1};
  height: 48px;
  width: 100%;
  border-radius: 4px;
  padding: 0 22px 0 22px;
  margin: 12px 0 15px 0;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 390px) {
    height: 38px;
    font-size: 13px;
    margin: 8px 0 15px 0;
  }
`;

export { ButtonStyle };
