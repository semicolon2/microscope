import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import * as actionCreators from "../actionCreators";
import Period from "./Period";

class PeriodList extends PureComponent {
  onDragStart = start => {
    const { draggableId, type } = start;

    switch (type) {
      case "period":
        this.props.dragPeriod({
          periodId: draggableId
        });
        break;
      case "event":
        this.props.dragEvent({
          eventId: draggableId
        });
        break;
      case "scene":
        this.props.dragScene({
          sceneId: draggableId
        });
        break;
      default:
        return;
    }
  };

  onDragEnd = result => {
    const { destination, source, type } = result;

    switch (type) {
      case "period":
        this.props.dropPeriod({
          startIndex: source.index,
          endIndex: destination.index,
          periodId: result.draggableId
        });
        break;
      case "event":
        this.props.dropEvent({
          startIndex: source.index,
          endIndex: destination.index,
          periodId: source.droppableId,
          eventId: result.draggableId
        });
        break;
      case "scene":
        this.props.dropScene({
          startIndex: source.index,
          endIndex: destination.index,
          eventId: source.droppableId,
          sceneId: result.draggableId
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
              {this.props.periodIds.map((periodId, index) => {
                return (
                  <Period
                    {...this.props.periods[periodId]}
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
    periodIds: state.periods.allIds,
    periods: state.periods.byId
  };
}

const PeriodListContainer = connect(
  mapStateToProps,
  actionCreators
)(PeriodList);

export default PeriodListContainer;
