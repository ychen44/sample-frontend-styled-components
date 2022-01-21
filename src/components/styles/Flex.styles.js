import styled from "styled-components";

// any div and any ul we will set flex to 1
export const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div,
  & > ul {
    flex: 1;
  }
`;
