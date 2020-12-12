import React from "react";

import { CurrentItem, FileDetails } from "./CurrentItem";
import { isFileFn } from "./helper";
import { Col } from "./styleComponent";

export const FinderPreviewCol = ({ folderTree, path, onChange, count }) => {
  const { children, name } = folderTree;
  const copySelectedPath = [...path];
  const currentSelected = copySelectedPath.shift();
  let nextRender = null;
  const isSelectedFn = (item) => item.name === currentSelected;

  const getNextRender = (item, isSelected) => {
    const isFile = isFileFn(item);
    if (isSelected && !isFile) {
      nextRender = (
        <FinderPreviewCol
          folderTree={item}
          path={copySelectedPath}
          onChange={onChange}
          count={count + 1}
        />
      );
    } else if (isSelected && isFile) {
      nextRender = <FileDetails data={item} />;
    }
  };

  return (
    <>
      <Col key={name}>
        {children &&
          children.map((item, index) => {
            const isSelected = isSelectedFn(item);
            getNextRender(item, isSelected);
            return (
              <CurrentItem
                key={index}
                data={item}
                isSelected={isSelected}
                onClick={() => {
                  onChange && onChange(item, count);
                }}
              />
            );
          })}
      </Col>
      {nextRender}
    </>
  );
};
