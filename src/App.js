import React from "react";
import styled from "styled-components";
import { FinderPreview } from "./components/FinderPreview/index";
import { useFinderPreview } from "./components/FinderPreview/useFinderPreview";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 1rem 2rem;
`;
const data = {
  type: "root",
  name: "/",
  children: [
    {
      type: "file",
      name: "file2",
    },
    {
      type: "folder",
      name: "folder1",
      children: [
        {
          type: "file",
          name: "folder1 - file1",
        },
        {
          type: "file",
          name: "folder1 - file2",
        },
        {
          type: "folder",
          name: "folder1 - folder1",
          children: [
            {
              type: "file",
              name: "folder1 - folder1 - file1",
            },
            {
              type: "folder",
              name: "folder1 - folder1 - folder1",
              children: [
                {
                  type: "file",
                  name: "folder1 - folder1 - folder1 - file1",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
export default function App() {
  const defaultSelectPath = [
    "folder1",
    "folder1 - folder1",
    "folder1 - folder1 - file1",
  ];
  const finderState = useFinderPreview(data, defaultSelectPath);

  const updateNodeFetch = (item) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (item.type === "file") {
          resolve({ ...item, details: "hawei add some details" });
        } else if (item.type === "folder") {
          const children = Array.isArray(item.children) ? item.children : [];
          const newChildren = [
            ...children,
            {
              type: "file",
              name: "random file",
            },
          ];
          resolve({ ...item, children: newChildren });
        }
      }, 1000);
    });
  };

  const updateNode = async (item) => {
    const res = await updateNodeFetch(item);
    finderState.updateNode(item, res);
  };

  return (
    <>
      <Container className="App">
        <FinderPreview
          {...finderState}
          onChange={(item) => {
            console.log(item);
            updateNode(item);
          }}
        />
      </Container>
    </>
  );
}
