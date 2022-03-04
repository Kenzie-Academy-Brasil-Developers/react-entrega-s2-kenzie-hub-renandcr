import styled from "styled-components";

const ModalRemovedSection = styled.section`
  width: 369px;
  position: fixed;
  top: 0;
  margin-top: 160px;
  @media (max-width: 460px) {
    position: unset;
    margin-top: 0;
    margin-bottom: 5px;
    width: 360px;
  }
  @media (max-width: 360px) {
    width: 300px;
  }
  .modal-div-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0 15px;
    background-color: var(--grey-2);
    height: 50px;
    border-radius: 4px 4px 0 0;
    h1 {
      font-size: 14px;
      font-weight: 700;
      color: var(--grey-0);
    }
    span {
      cursor: pointer;
      font-size: 17px;
      font-weight: 600;
      font-family: "Nunito", sans-serif;
      color: var(--grey-1);
    }
  }
`;

const ModalRemovedDiv = styled.div`
  max-width: 100%;
  background-color: var(--grey-3);
  padding: 12px 15px 15px 15px;
  border-radius: 0 0 4px 4px;
  div {
    background-color: var(--grey-2);
  }
  label {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-0);
  }
  .modalRemoved-div-buttons {
    display: flex;
    background-color: var(--grey-3);
  }
  .modalRemoved-button-grey {
    margin-top: 5px;
    width: 98px;
  }
  .modalRemoved-button-negative {
    margin-top: 5px;
  }
  button + button {
    margin-left: 20px;
  }
`;
export { ModalRemovedSection, ModalRemovedDiv };
