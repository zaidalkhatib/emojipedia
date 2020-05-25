import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia";

function create(info) {
  return (
    <Entry
      Key={info.id}
      name={info.name}
      emoji={info.emoji}
      meaning={info.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>emojipedia</h1>
      {emojipedia.map(create)}
    </div>
  );
}

export default App;
