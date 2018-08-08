import React, { PureComponent } from "react";
import { Draggable } from "react-beautiful-dnd";
import TextAreaAutosize from "react-autosize-textarea";

import Tone from "./Tone";
import Collapsible from "react-collapsible";
import SceneList from "./SceneList";
import OpenCard from "./OpenCard";

class Event extends PureComponent {
  handleUpdateTitle = e => {
    this.props.updateEvent({
      id: this.props.id,
      title: e.target.value
    });
  };

  handleUpdateTone = () => {
    this.props.updateEvent({
      id: this.props.id,
      tone: this.props.tone === "dark" ? "light" : "dark"
    });
  };

  handleUpdateText = e => {
    this.props.updateEvent({
      id: this.props.id,
      text: e.target.value
    });
  };

  handleOpen = () => {
    this.props.updateEvent({
      id: this.props.id,
      open: this.props.open === false ? true : false
    });
  };

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
                <OpenCard onClick={this.handleOpen} open={this.props.open} />
                <TextAreaAutosize
                  className="text-center"
                  style={{ resize: "none" }}
                  maxRows={4}
                  value={this.props.title}
                  onChange={this.handleUpdateTitle}
                />
                <Tone
                  classNames="inline m-auto mr-1 cursor-pointer w-6 h-6"
                  tone={this.props.tone}
                  onClick={this.handleUpdateTone}
                />
              </div>
              <div className="mt-1 mb-1">
                <Collapsible
                  trigger=""
                  transitionTime={200}
                  open={this.props.open}
                >
                  <div className="p-1">
                    <TextAreaAutosize
                      className="border-grey-darkest border-t"
                      style={{ resize: "none" }}
                      rows={2}
                      maxRows={6}
                      value={this.props.text}
                      onChange={this.handleUpdateText}
                    />
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
