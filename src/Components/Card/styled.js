import styled from "styled-components";

const CardStyle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  max-width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: var(--grey-4);
  margin-top: 15px;
  box-sizing: border-box;

  h3 {
    font-size: 14px;
    font-weight: 700;
    color: var(--grey-0);
    @media (max-width: 460px) {
      font-size: 12px;
    }
  }
  h4 {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-1);
    @media (max-width: 460px) {
      font-size: 10px;
    }
  }
  :active {
    background-color: var(--grey-2);
  }
`;
export { CardStyle };
