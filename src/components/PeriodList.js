import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import * as actionCreators from "../actionCreators";
import Period from "./Period";

class PeriodList extends PureComponent {
  onDragStart = result => {};

  onDragEnd = result => {
    const { destination, source, type } = result;
    if (
      !destination ||
      destination.droppableId !== source.droppableId ||
      destination.index === source.index
    ) {
      return;
    }

    switch (type) {
      case "period":
        this.props.dragDropPeriod({
          startIndex: source.index,
          endIndex: destination.index
        });
        break;
      case "event":
        this.props.dragDropEvent({
          startIndex: source.index,
          endIndex: destination.index,
          periodId: source.droppableId
        });
        break;
      case "scene":
        this.props.dragDropScene({
          startIndex: source.index,
          endIndex: destination.index,
          eventId: source.droppableId
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
              {this.props.periods.allIds.map((periodId, index) => {
                return (
                  <Period
                    {...this.props.periods.byId[periodId]}
                    key={periodId}
                    index={index}
                  />
                );
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
