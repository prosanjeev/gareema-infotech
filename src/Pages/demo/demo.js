import React from "react";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";

const Arrow = ({ direction }) => {
  return (
    <Text fontSize="sm" fontWeight="bold">
      {direction === "left" ? "←" : "→"}
    </Text>
  );
};

const MLMTreeNode = ({ node, parentDirection }) => {
  return (
    <Flex alignItems="center">
      {parentDirection && <Arrow direction={parentDirection} />}
      <Box
        borderWidth="1px"
        borderRadius="md"
        p="2"
        m="1"
        textAlign="center"
        bg="gray.100"
      >
        {node.name}
      </Box>
    </Flex>
  );
};

const MLMTree = ({ root, parentDirection }) => {
  const renderNode = (node, parentDirection) => {
    return (
      <Flex key={node.id} direction="column" alignItems="center">
        <MLMTreeNode node={node} parentDirection={parentDirection} />
        <Flex>
          {node.left && renderNode(node.left, "left")}
          {node.right && renderNode(node.right, "right")}
        </Flex>
      </Flex>
    );
  };

  return <>{root && renderNode(root, parentDirection)}</>;
};

const BinaryMLMTree = () => {
  // Example list of nodes with parent IDs and position info
  const nodes = [
    { id: 1, name: "Root", parentId: null, position: "center" },
    { id: 2, name: "Left Child", parentId: 1, position: "left" },
    { id: 3, name: "Right Child", parentId: 1, position: "right" },
    { id: 4, name: "Left-Left Child", parentId: 2, position: "left" },
    { id: 5, name: "Left-right Child", parentId: 2, position: "right" },
    { id: 6, name: "Right-Right Child", parentId: 3, position: "right" },
    { id: 7, name: "Right-Right Child", parentId: 5, position: "left" },
  ];

  // Convert flat list to tree structure
  const constructTree = (nodes, parentId) => {
    const tree = nodes
      .filter((node) => node.parentId === parentId)
      .map((node) => ({
        ...node,
        left: constructTree(nodes, node.id),
        right: constructTree(nodes, node.id), // adjust this based on your actual data
      }));

    return tree.length ? tree[0] : null;
  };

  const treeRoot = constructTree(nodes, null);

  return (
    <Box p="4">
      <MLMTree root={treeRoot} />
    </Box>
  );
};

export default BinaryMLMTree;
