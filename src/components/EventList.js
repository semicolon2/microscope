import React, { PureComponent } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../actionCreators";
import Event from "./Event";

class EventList extends PureComponent {
  render() {
    return (
      <div className="flex flex-col items-start">
        {this.props.events
          .filter(event => event.periodId === this.props.periodId)
          .map(event => {
            return <Event {...event} key={event.id} />;
          })}
      </div>
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
