import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import * as actionCreators from "../actionCreators";
import Event from "./Event";

class EventList extends PureComponent {
  handleAddCard = () => {
    this.props.addEvent(this.props.periodId);
  };

  render() {
    return (
      <Droppable droppableId={this.props.periodId} type="event">
        {provided => (
          <div
            className="flex flex-col items-start"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {this.props.eventIds.map((eventId, index) => {
              return (
                <Event
                  {...this.props.events[eventId]}
                  key={eventId}
                  index={index}
                  updateEvent={this.props.updateEvent}
                />
              );
            })}
            {provided.placeholder}
            <div
              className="card-border add-card w-48 trans hover:border-grey-dark hover:text-grey-darker hover:shadow-lg cursor-pointer"
              onClick={this.handleAddCard}
            >
              <p className="text-4xl">+</p>
            </div>
          </div>
        )}
      </Droppable>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events.byId
  };
}

const EventListContainer = connect(
  mapStateToProps,
  actionCreators
)(EventList);

export default EventListContainer;
