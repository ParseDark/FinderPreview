import React from "react";
import styled from "styled-components";
import { FinderPreviewCol } from "./FinderPreviewCol";

const FolderContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border: 1px solid #e8e8e8;
  width: 100%;
`;

export function FinderPreview({ folderTree, path, setPath, onChange }) {
  const ctx = {
    folderTree,
    path,
    count: 0,
  };

  return (
    <>
      <FolderContainer>
        <FinderPreviewCol
          {...ctx}
          onChange={(item, count) => {
            const newPath = [...path].slice(0, count);
            newPath[count] = item.name;
            setPath(newPath);
            onChange && onChange(item);
          }}
        />
      </FolderContainer>
    </>
  );
}
