import React, {PureComponent} from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Tone from './Tone';
import EventList from './EventList';

class Period extends PureComponent {
  render() {
    return (
      <Draggable draggableId={this.props.key} index={this.props.index}>
        {(provided) => (
          <div className="flex flex-col items-center" >
          <div 
          className="card-border w-32 h-48 bg-white"
          {...provided.draggableProps}
          ref={provided.innerRef}>
            <span className="drag-handle" {...provided.dragHandleProps} ></span>
            <p className="text-center">{this.props.text}</p>
            <Tone tone={this.props.tone} toneHeight="h-16" />
          </div>
          <EventList events={this.props.events} />
        </div>
        )}
      </Draggable>
    )
  }
}

export default Period;