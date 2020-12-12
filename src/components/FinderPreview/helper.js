import { v4 as uuidv4 } from "uuid";

export const isFileFn = (item) => item.type === "file";

export const updateNodeFn = (node, tree) => {
  if (tree.id === node.id) {
    debugger;
    return node;
  } else {
    if (Array.isArray(tree.children)) {
      tree.children = tree.children.map((item) => {
        return updateNodeFn(node, item);
      });
    }
  }
  return tree;
};

export const formateData = (data) => {
  if (!data.id) {
    data.id = uuidv4();
  }
  if (Array.isArray(data.children)) {
    data.children = data.children.map((item) => {
      return formateData(item);
    });
  }
  return data;
};
