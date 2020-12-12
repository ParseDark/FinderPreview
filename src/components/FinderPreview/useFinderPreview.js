import { useEffect, useReducer } from "react";

import { updateNodeFn, formateData } from "./helper";

const useFinderPreviewState = (
  initState = {
    folderTree: {},
    path: [],
  }
) => {
  const [data, dispatchData] = useReducer((state, action) => {
    const { type, value } = action;
    switch (type) {
      case "SetFolderTree":
        return {
          ...state,
          folderTree: value,
        };
      case "ResetFolderTree":
        return {
          ...state,
          folderTree: {},
        };
      case "SetPath":
        return {
          ...state,
          path: value,
        };
      case "UpdateNode":
        console.log(value);
        const newTree = updateNodeFn(value, state.folderTree);
        return {
          ...state,
          folderTree: newTree,
        };
      default:
        return state;
    }
  }, initState);

  const setFolderTree = (value) => {
    dispatchData({ type: "SetFolderTree", value });
  };

  const resetTheTree = () => {
    dispatchData({ type: "ResetFolderTree" });
  };

  const updateNode = (item, res) => {
    const newNode = { ...item, ...formateData(res), id: item.id };
    dispatchData({
      type: "UpdateNode",
      value: newNode,
    });
  };

  const setPath = (path) => {
    dispatchData({ type: "SetPath", value: path });
  };

  return {
    data,
    resetTheTree,
    updateNode,
    setPath,
    setFolderTree,
  };
};

export const useFinderPreview = (initState = {}, defaultSelectPath = []) => {
  const {
    data,
    resetTheTree,
    updateNode,
    setPath,
    setFolderTree,
  } = useFinderPreviewState({
    folderTree: initState,
    path: defaultSelectPath,
  });

  useEffect(() => {
    setFolderTree(formateData(initState));
  }, []);

  return { ...data, resetTheTree, updateNode, setPath };
};
