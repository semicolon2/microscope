import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import * as actionCreators from "../actionCreators";
import Event from "./Event";

class EventList extends PureComponent {
  render() {
    return (
      <Droppable droppableId={this.props.periodId} type="event">
        {provided => (
          <div
            className="flex flex-col items-start"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {this.props.events
              .filter(event => event.periodId === this.props.periodId)
              .map(event => {
                return <Event {...event} key={event.id} />;
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
