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
        isDropDisabled={this.props.periodId !== "period1" ? true : false}
      >
        {provided => (
          <div
            className="flex flex-col items-start"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {this.props.eventList.map((eventId, index) => {
              return (
                <Event
                  {...this.props.events.byId[eventId]}
                  key={eventId}
                  index={index}
                />
              );
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
    events: state.events
  };
}

const EventListContainer = connect(
  mapStateToProps,
  actionCreators
)(EventList);

export default EventListContainer;
