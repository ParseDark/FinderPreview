import React from "react";
import { isFileFn } from "./helper";

import {
  Col,
  Container,
  MainContent,
  Operation,
  Item,
  IconContainer,
} from "./styleComponent";

export const CurrentItem = ({ data, isSelected, onClick }) => {
  const isFile = isFileFn(data);
  if (isFile) {
    return (
      <FinderFileItem
        isSelected={isSelected}
        key={data.name}
        data={data}
        onClick={onClick}
      />
    );
  } else if (!isFile) {
    return (
      <FinderFolderItem
        isSelected={isSelected}
        key={data.name}
        data={data}
        onClick={onClick}
      />
    );
  }
};

const withTypeLayout = (type) => (Component) => {
  if (type === "file") {
    return ({ onClick, ...props }) => (
      <Container onClick={onClick}>
        <IconContainer />
        <MainContent>
          <Component {...props} />
        </MainContent>
        <Operation />
      </Container>
    );
  }

  if (type === "folder") {
    return ({ onClick, ...props }) => (
      <Container onClick={onClick}>
        <IconContainer />
        <MainContent>
          <Component {...props} />
        </MainContent>
        <Operation />
      </Container>
    );
  }
};

const FinderFileItem = withTypeLayout("file")(({ data, isSelected }) => {
  return (
    <Item key={data.name}>
      {data.name} - {isSelected ? "1" : "0"}
    </Item>
  );
});

const FinderFolderItem = withTypeLayout("folder")(({ data, isSelected }) => {
  return (
    <Item key={data.name}>
      {data.name} - {isSelected ? "1" : "0"}
    </Item>
  );
});

export const FileDetails = ({ data }) => {
  return <Col>{JSON.stringify(data, null, 4)}</Col>;
};
