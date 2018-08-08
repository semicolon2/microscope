import React, { PureComponent } from "react";
import { Draggable } from "react-beautiful-dnd";

import Tone from "./Tone";
import Collapsible from "react-collapsible";
import SceneList from "./SceneList";

class Event extends PureComponent {
  trigger = (
    <div className="flex justify-between">
      <p className="pl-4 text-grey-dark">&#9660;</p>
      <p className="text-grey-dark">&#9660;</p>
      <p className="pr-4 text-grey-dark">&#9660;</p>
    </div>
  );

  openTrigger = (
    <div className="flex justify-between">
      <p className="pl-4 text-grey-darker">&#9650;</p>
      <p className="text-grey-darker">&#9650;</p>
      <p className="pr-4 text-grey-darker">&#9650;</p>
    </div>
  );

  handleUpdateTitle = e => {};

  handleUpdateTone = () => {
    this.props.updateEvent({
      id: this.props.id,
      tone: this.props.tone === "dark" ? "light" : "dark"
    });
  };

  handleUpdateText = e => {};

  render() {
    return (
      <Draggable
        draggableId={this.props.id}
        index={this.props.index}
        type="event"
      >
        {(provided, snapshot) => (
          <div {...provided.draggableProps} ref={provided.innerRef}>
            <div
              className={`card-border w-48 h-auto mb-0 trans shadow-md hover:shadow-lg ${
                snapshot.isDragging || this.props.eventIsDragging
                  ? "shadow-lg"
                  : ""
              }`}
            >
              <span className="drag-handle" {...provided.dragHandleProps} />
              <div className="flex flex-row items-center mt-1">
                <p className="m-auto text-center">{this.props.title}</p>
                <Tone
                  classNames="inline m-auto mr-1 cursor-pointer w-6 h-6"
                  tone={this.props.tone}
                  onClick={this.handleUpdateTone}
                />
              </div>
              <div className="mt-1 mb-1">
                <Collapsible
                  trigger={this.trigger}
                  triggerWhenOpen={this.openTrigger}
                  transitionTime={200}
                >
                  <div className="p-1">
                    <p className="border-grey-darkest border-t">
                      {" "}
                      {this.props.text}{" "}
                    </p>
                  </div>
                </Collapsible>
              </div>
            </div>
            <SceneList
              eventId={this.props.id}
              sceneIds={this.props.scenes}
              eventIsDragging={snapshot.isDragging}
            />
          </div>
        )}
      </Draggable>
    );
  }
}

export default Event;
