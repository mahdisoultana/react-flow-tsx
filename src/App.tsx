import "./App.css";
import ReactFlowPro from "./d3-reactflow/App";
import { ReactFlowProvider } from "react-flow-renderer";
import { useState } from "react";
function App() {
  const [slider, setSlider] = useState(20);

  return (
    <div className="h-screen bg-gray-100 w-[100vw]">
      <div className="bg-red-500 m-10 cursor-pointer pointer-events-auto space-x-4 absolute right-4 top-4 flex items-center p-4 z-20">
        <input
          type="range"
          value={slider}
          onChange={(e) => setSlider(+e.target.value)}
          className="cursor-pointer pointer-events-auto"
        />
        <p>{slider * -100} strength</p>
      </div>
      <div className="h-screen bg-red-100 w-[100vw] absolute bottom-0 left-0 z-10">
        <ReactFlowProvider>
          <ReactFlowPro strength={-(slider * 100)} distance={50} />
        </ReactFlowProvider>
      </div>
    </div>
  );
}

export default App;
