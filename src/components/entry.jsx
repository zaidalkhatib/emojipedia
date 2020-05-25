import React from "react";

function Entry(info) {
  return (
    <div>
      <h1>
        <span>
          {" "}
          {info.emoji} {info.name}
        </span>
      </h1>

      <p className="dictionary"> {info.meaning}</p>
    </div>
  );
}

export default Entry;
