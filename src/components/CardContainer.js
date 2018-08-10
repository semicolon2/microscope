import React, { PureComponent } from "react";

import Nav from "./Nav";
import DndContext from "./DndContext";

export default class CardContainer extends PureComponent {
  render() {
    return (
      <div>
        <Nav />
        <div
          className="overflow-auto scroll border border-grey"
          style={{
            height: "98vh",
            maxHeight: "98vh"
          }}
        >
          <DndContext />
        </div>
      </div>
    );
  }
}
