import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import * as actionCreators from "../actionCreators";
import PeriodList from "./PeriodList";

class DndContext extends PureComponent {
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

    if (
      !destination ||
      source.droppableId !== destination.droppableId ||
      source.index === destination.index
    ) {
      return;
    }

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
        <PeriodList />
      </DragDropContext>
    );
  }
}

const DndContextContainer = connect(
  () => ({}),
  actionCreators
)(DndContext);

export default DndContextContainer;
