import styled from "styled-components";

const SelectStyle = styled.select`
  background-color: var(--grey-2);
  height: 48px;
  width: 100%;
  border-radius: 4px;
  padding: 0 16px 0 16px;
  margin: 15px 0 15px 0;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  color: var(--grey-1);
  :focus {
    color: var(--grey-0);
    border: solid 1px var(--grey-0);
  }
  option {
    color: var(--grey-1);
  }

  @media (max-width: 390px) {
    height: 38px;
    font-size: 11px;
    margin: 3px 0 15px 0;
  }
`;

export { SelectStyle };
