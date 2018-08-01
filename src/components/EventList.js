import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import * as actionCreators from "../actionCreators";
import Event from "./Event";

class EventList extends PureComponent {
  render() {
    return (
      <Droppable
        droppableId={this.props.periodId}
        type="event"
        isDropDisabled={false}
      >
        {provided => (
          <div
            className="flex flex-col items-start"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {this.props.events
              .filter(event => event.periodId === this.props.periodId)
              .map((event, index) => {
                return <Event {...event} key={event.id} index={index} />;
              })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    isDropDisabled: state.isDropDisabled.event
  };
}

const EventListContainer = connect(
  mapStateToProps,
  actionCreators
)(EventList);

export default EventListContainer;
