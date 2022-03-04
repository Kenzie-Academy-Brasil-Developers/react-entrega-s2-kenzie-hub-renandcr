import styled from "styled-components";

const RegisterSection = styled.div`
  width: 370px;

  @media (max-width: 390px) {
    width: 290px;
  }
  @media (max-width: 298px) {
    width: 250px;
  }
  img {
    width: 122px;
    height: 16px;
  }
  .button-logo {
    height: 32px;
    width: 67px;
    border-radius: 4px;
    padding: 0 16px 0 16px;
    background-color: var(--grey-3);
    color: var(--grey-0);
    font-size: 12px;
    font-weight: 600;
    border: none;
  }
`;

const RegisterLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 90px;
`;

const RegisterDiv = styled.div`
  color: var(--grey-0);
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  padding: 20px 15px 25px 15px;
  background-color: var(--grey-3);

  @media (max-width: 390px) {
    padding: 10px 15px 10px 15px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form {
    max-width: 100%;
  }
  label {
    font-size: 12px;
    color: var(--grey-0);
    font-weight: 400;
  }
  h3 {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-1);
    margin-bottom: 20px;
  }
  h2 {
    font-weight: 700;
    font-size: 19px;
    margin: 20px 0 10px 0;
  }
  .button-register-form {
    margin-top: 10px;
  }
  p {
    margin: -13px 0 9px 0;
    font-size: 10px;
    color: rgb(212, 32, 32);
    text-align: left;
  }
`;

export { RegisterDiv, RegisterSection, RegisterLogo };
