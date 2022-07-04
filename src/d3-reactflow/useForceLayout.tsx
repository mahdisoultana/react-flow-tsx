import { useEffect } from "react";
import { hierarchy } from "d3-hierarchy";
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceX,
  forceY,
} from "d3-force";
import { scaleLinear } from "d3-scale";
import { v4 as uuidv4 } from "uuid";
import { useReactFlow } from "react-flow-renderer";

import tree from "./tree";
const colors: any = ["#FF0072", "#0041D0"];
const nodeColorScale = scaleLinear().domain([0, 5]).range(colors);

function getNode(n: any) {
  return {
    id: n.data.id,
    position: { x: n.x, y: n.y },
    data: { label: n.data.name, color: nodeColorScale(n.depth) },
    type: "circle",
  };
}
function getEdge(e: any) {
  return {
    id: uuidv4(),
    source: e.source.data.id,
    target: e.target.data.id,
    type: "straight",
  };
}
const root: any = hierarchy(tree);
const links: any = root.links();
const nodes: any = root.descendants();
type UseForceLayoutOptions = {
  strength?: number;
  distance?: number;
};
function useForceLayout({
  strength = -1000,
  distance = 150,
}: UseForceLayoutOptions) {
  const { setNodes, setEdges } = useReactFlow();

  useEffect(() => {
    const simulation = forceSimulation(nodes)
      .force(
        "link",
        forceLink(links)
          .id((d: any) => {
            return d.data.id;
          })
          .distance(distance)
          .strength(1),
      )
      .force("charge", forceManyBody().strength(strength))
      .force("x", forceX())
      .force("y", forceY())
      .on("tick", () => {
        setNodes(nodes.map(getNode));
      });

    setNodes(nodes.map(getNode));

    setEdges(links.map(getEdge));

    return () => {
      simulation.stop();
    };
  }, [strength, distance, setNodes, setEdges]);
}
export default useForceLayout;
