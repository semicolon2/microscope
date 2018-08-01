import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import * as actionCreators from "../actionCreators";
import Period from "./Period";

class PeriodList extends PureComponent {
  onDragStart = result => {};

  onDragEnd = result => {
    if (
      !result.destination ||
      result.destination.droppableId !== result.source.droppableId ||
      result.destination.index === result.source.index
    ) {
      return;
    }

    switch (result.type) {
      case "period":
        this.props.dragDropPeriod({
          startIndex: result.source.index,
          endIndex: result.destination.index
        });
        break;
      case "event":
        this.props.dragDropEvent({
          startIndex: result.source.index,
          endIndex: result.destination.index,
          period: result.source.droppableId
        });
        break;
      case "scene":
        this.props.dragDropScene({
          startIndex: result.source.index,
          endIndex: result.destination.index,
          event: result.source.droppableId
        });
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
      >
        <Droppable droppableId="periods" direction="horizontal" type="period">
          {provided => (
            <div
              className="flex justify-center items-start mt-32 h-screen"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.periods.map((period, index) => {
                return <Period {...period} key={period.id} index={index} />;
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

function mapStateToProps(state) {
  return {
    periods: state.periods
  };
}

const PeriodListContainer = connect(
  mapStateToProps,
  actionCreators
)(PeriodList);

export default PeriodListContainer;
