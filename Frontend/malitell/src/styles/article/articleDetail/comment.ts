import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  margin-bottom: 5%;
  &.client {
    width: 48%;
  }
`;

export const NameBox = styled.div`
  width: 95%;
  margin: auto;
`;

export const ContentBox = styled.div`
  width: 95%;
`;
