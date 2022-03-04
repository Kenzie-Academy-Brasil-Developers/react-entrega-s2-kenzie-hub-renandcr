import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  border-bottom: var(--grey-4) solid 1px;
  div {
    width: 779px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 800px) {
      width: 580px;
    }

    @media (max-width: 600px) {
      width: 450px;
    }
    @media (max-width: 460px) {
      width: 360px;
    }
    @media (max-width: 360px) {
      width: 300px;
    }
  }
  img {
    width: 105px;
    height: 14px;
    margin-top: 10px;
  }
  button {
    width: 55px;
    height: 32px;
    padding: 0 16px 0 16px;
    border-radius: 4px;
    border: none;
    background-color: var(--grey-3);
    font-size: 12px;
    font-weight: 600;
    color: var(--grey-0);
  }
`;

export { HeaderStyle };
