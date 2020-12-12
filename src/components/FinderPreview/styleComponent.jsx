import styled from "styled-components";

export const Col = styled.div`
  border-right: 1px solid #e8e8e8;
  display: flex;
  flex-flow: column nowrap;
  min-width: 200px;
`;

export const MainContent = styled.div`
  background-color: green;
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Operation = styled.div`
  background-color: red;
  width: 36px;
  height: 36px;
  flex-grow: 0;
  flex-shrink: 0;
`;
export const Item = styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 1rem;
`;

export const IconContainer = styled.div`
  background-color: red;
  width: 36px;
  height: 36px;
  flex-grow: 0;
  flex-shrink: 0;
`;
