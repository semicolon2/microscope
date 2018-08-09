import React, { PureComponent } from "react";

import Nav from "./Nav";
import DndContext from "./DndContext";

export default class CardContainer extends PureComponent {
  render() {
    return (
      <div>
        <Nav />
        <div
          className="overflow-auto scroll"
          style={{
            maxHeight: "95vh"
          }}
        >
          <DndContext />
        </div>
      </div>
    );
  }
}
