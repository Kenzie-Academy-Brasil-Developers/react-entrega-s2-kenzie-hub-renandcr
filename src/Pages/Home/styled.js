import styled from "styled-components";

const HomeDivGreetings = styled.div`
  width: 779px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  box-sizing: border-box;

  @media (max-width: 800px) {
    width: 580px;
  }

  @media (max-width: 600px) {
    width: 450px;
  }
  @media (max-width: 460px) {
    margin-top: 20px;
    width: 360px;
    justify-content: unset;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 60px;
  }
  @media (max-width: 360px) {
    width: 300px;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: var(--grey-0);
    @media (max-width: 460px) {
      margin: 0;
    }
  }
  h3 {
    font-size: 12px;
    font-weight: 600;
    color: var(--grey-1);
    @media (max-width: 460px) {
      display: none;
    }
  }
`;
const HomeHr = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: var(--grey-4);
  @media (max-width: 460px) {
    display: none;
  }
`;

const HomeSection = styled.section`
  width: 779px;
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
  .home-div-tecnologies {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    @media (max-width: 460px) {
      display: none;
    }
    img {
      cursor: pointer;
    }
    h4 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: var(--grey-0);
    }
    img {
      width: 32px;
      height: 32px;
    }
  }
`;

const HomeDiv = styled.div`
  max-width: 100%;
  height: auto;
  padding: 5px 15px 20px 15px;
  background-color: var(--grey-3);
  border-radius: 4px;
`;

export { HomeSection, HomeDiv, HomeDivGreetings, HomeHr };
