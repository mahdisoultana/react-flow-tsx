export default [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  {
    id: "4",
    type: "input",
    data: { label: "Input red" },
    position: { x: 50, y: 5 },
  },
  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: "Default Node " },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output Node" },
    position: { x: 250, y: 250 },
  },
];
