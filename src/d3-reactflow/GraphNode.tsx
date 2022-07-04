import React, { memo, useMemo } from "react";
import { Handle, Position, NodeProps } from "react-flow-renderer";
const handleStyle: React.CSSProperties = {
  transform: "translate(-50%, -50%)",
  top: "50%",
  left: "50%",
  opacity: 0,
};
const labelStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const nodeStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  zIndex: 2,
  borderRadius: 40,
  height: 80,
  width: 80,
  border: "2px #333 solid",
  fontWeight: "bold",
};
const GraphNode = ({ data }: NodeProps) => {
  const graphNodeStyle = useMemo(
    () => ({ ...nodeStyle, backgroundColor: data.color }),
    [data.color],
  );
  return (
    <div style={graphNodeStyle}>
      {data?.label && (
        <div style={{ ...labelStyle, pointerEvents: "none" }}>{data.label}</div>
      )}
      <Handle style={handleStyle} type="target" position={Position.Top} />
      <Handle style={handleStyle} type="source" position={Position.Bottom} />
    </div>
  );
};
export default memo(GraphNode);
