import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Maps from "./maps";

function App() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <div
      style={{
        border: "2px solid red",
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ width: "50vw", height: "100vh", border: "2px solid red"}}>
        <Maps selectPosition={selectPosition} />
      </div>
      <div style={{ width: "50vw", border: "2px solid red"}}>
        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
      </div>
    </div>
  );
}

export default App;