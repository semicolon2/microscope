import React, { PureComponent } from "react";
import { Draggable } from "react-beautiful-dnd";

import Tone from "./Tone";
import EventList from "./EventList";

class Period extends PureComponent {
  render() {
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {provided => (
          <div
            className="flex flex-col items-center"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className="card-border w-32 h-48">
              <span className="drag-handle" {...provided.dragHandleProps} />
              <p className="text-center">{this.props.text}</p>
              <Tone tone={this.props.tone} toneHeight="h-16" />
            </div>
            <EventList periodId={this.props.id} eventList={this.props.events} />
          </div>
        )}
      </Draggable>
    );
  }
}

export default Period;
