import React, { PureComponent } from "react";
import { Draggable } from "react-beautiful-dnd";

import Tone from "./Tone";
import EventList from "./EventList";

class Period extends PureComponent {
  handleUpdateText = e => {
    this.props.updatePeriod({ id: this.props.id, text: e.target.value });
  };

  render() {
    return (
      <Draggable
        draggableId={this.props.id}
        index={this.props.index}
        type="period"
      >
        {(provided, snapshot) => (
          <div
            className="flex flex-col items-center"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div
              className={`card-border w-32 h-48 trans shadow-md hover:shadow-lg ${
                snapshot.isDragging || this.props.eventIsDragging
                  ? "shadow-lg"
                  : ""
              }`}
            >
              <span className="drag-handle" {...provided.dragHandleProps} />
              <textarea
                className="text-center"
                value={this.props.text}
                style={{ resize: "none", height: "auto" }}
                rows="4"
                onChange={this.handleUpdateText}
              />
              <Tone
                tone={this.props.tone}
                toneHeight="h-16"
                onClick={this.handleUpdateTone}
              />
            </div>
            <EventList periodId={this.props.id} eventIds={this.props.events} />
          </div>
        )}
      </Draggable>
    );
  }
}

export default Period;
