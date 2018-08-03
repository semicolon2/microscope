import React, { PureComponent } from "react";
import Collapsible from "react-collapsible";
import { Draggable } from "react-beautiful-dnd";

import Tone from "./Tone";

class Scene extends PureComponent {
  toneTrigger = (
    <div className="flex justify-around m-1">
      <p className="pr-1">{this.props.question}</p>
      <Tone toneHeight="h-6" tone={this.props.tone} />
    </div>
  );

  render() {
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div {...provided.draggableProps} ref={provided.innerRef}>
            <div
              className={`border border-t-0 rounded-t-none border-grey-darker w-48 h-auto rounded text-center bg-white trans ${
                snapshot.isDragging ? "shadow-lg" : "shadow-md"
              }`}
              style={
                snapshot.isDragging
                  ? { transform: "scale(1.05)" }
                  : { transform: "scale(1)" }
              }
            >
              <span className="drag-handle" {...provided.dragHandleProps} />
              <div>
                <Collapsible trigger={this.toneTrigger} transitionTime={200}>
                  <div className="p-1 m-auto text-center">
                    <p className="border-t border-grey-darkest">
                      {this.props.text}
                    </p>
                    <p className="border-t border-grey-darkest">
                      {this.props.answer}
                    </p>
                  </div>
                </Collapsible>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Scene;
