import styled from "styled-components";

const LoginSection = styled.section`
  width: 369px;
  height: auto;
  @media (max-width: 390px) {
    width: 290px;
  }
  @media (max-width: 298px) {
    width: 250px;
  }
`;
const LoginLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  img {
    width: 144px;
    height: 19px;
  }
`;

const LoginDiv = styled.div`
  max-width: 100%;
  height: auto;
  padding: 20px 15px 25px 15px;
  border-radius: 4px;
  background-color: var(--grey-3);
  @media (max-width: 390px) {
    padding: 10px 15px 10px 15px;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: var(--grey-0);
    text-align: center;
  }
  label {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-0);
  }
  h4 {
    margin: 0;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: var(--grey-1);
    margin-top: 10px;
    @media (max-width: 390px) {
      margin-top: 5px;
    }
  }
  p {
    margin: -13px 0 9px 0;
    font-size: 10px;
    color: rgb(212, 32, 32);
    text-align: left;
  }
`;

export { LoginSection, LoginDiv, LoginLogo };
