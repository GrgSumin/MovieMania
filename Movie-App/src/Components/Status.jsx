import React from "react";
import Complete from "./Complete";
import HoldList from "./HoldList";
import Watching from "./Watching";

function Status() {
  return (
    <div>
      <div className="contain">
        <Watching />
        <hr />
        <Complete />
        <hr />
        <HoldList />
      </div>
    </div>
  );
}

export default Status;
