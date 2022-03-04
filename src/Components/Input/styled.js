import styled from "styled-components";

const StyleInput = styled.input`
  background-color: var(--grey-2);
  border: none;
  height: 48px;
  width: 100%;
  border-radius: 4px;
  padding: 0 16px 0 16px;
  margin: 15px 0 15px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  box-sizing: border-box;
  ::placeholder {
    color: var(--grey-1);
  }
  :focus {
    border: solid 1px var(--grey-0);
    color: var(--grey-0);
    background-color: var(--grey-2);
  }

  @media (max-width: 390px) {
    height: 38px;
    font-size: 12px;
    margin: 2px 0 15px 0;
  }
`;

export { StyleInput };
