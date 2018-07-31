import React, { PureComponent } from "react";
import { Draggable } from "react-beautiful-dnd";

import Tone from "./Tone";
import Collapsible from "react-collapsible";
import SceneList from "./SceneList";

class Event extends PureComponent {
  toneTrigger = (
    <div className="flex justify-around m-1 items-center">
      <p className="pr-1">{this.props.title}</p>
      <Tone toneHeight="h-6" tone={this.props.tone} />
    </div>
  );

  render() {
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {provided => (
          <div {...provided.draggableProps} ref={provided.innerRef}>
            <div className="card-border w-48 h-auto mb-0">
              <span className="drag-handle" {...provided.dragHandleProps} />
              <div className="mt-1 mb-1 text-center">
                <Collapsible trigger={this.toneTrigger} transitionTime={200}>
                  <div className="p-1">
                    <p className="border-grey-darkest border-t">
                      {" "}
                      {this.props.text}{" "}
                    </p>
                  </div>
                </Collapsible>
              </div>
            </div>
            <SceneList eventId={this.props.id} />
          </div>
        )}
      </Draggable>
    );
  }
}

export default Event;
