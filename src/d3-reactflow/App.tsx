import React from "react";
import ReactFlow, {
  Edge,
  Node,
  NodeTypes,
  ProOptions,
  useNodes,
} from "react-flow-renderer";
import useForceLayout from "./useForceLayout";
import GraphNode from "./GraphNode";
const proOptions: ProOptions = { account: "paid-pro", hideAttribution: true };
const defaultNodes: Node[] = [];
const defaultEdges: Edge[] = [];
const nodeTypes: NodeTypes = {
  circle: GraphNode,
};
type ExampleProps = {
  strength: number;
  distance: number;
};
export default function ReactFlowPro({ strength, distance }: ExampleProps) {
  useForceLayout({ strength, distance });
  const nodes = useNodes();

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      minZoom={-Infinity}
      maxZoom={Infinity}
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
      proOptions={proOptions}
      fitView
    ></ReactFlow>
  );
}
