import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import * as actionCreators from '../actionCreators';
import Period from './Period';

class PeriodList extends PureComponent {

  onDragEnd = (result) => {
    if (!result.destination || result.destination.droppableId !== result.source.droppableId || result.destination.index === result.source.index) {
      return;
    }

    this.props.dragDropPeriod({
      startIndex: result.source.index,
      endIndex: result.destination.index
    });
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="Period" direction="horizontal">
          {(provided) => (
            <div 
              className="flex justify-center items-start mt-32 h-screen"
              ref={provided.innerRef}
              {...provided.droppableProps}>
              {this.props.periods.map((period, index) => {
                return <Period {...period} key={period.id} index={index} />
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

function mapStateToProps(state) {
  return {
    periods: state.periods
  };
};

const PeriodListContainer = connect(mapStateToProps, actionCreators)(PeriodList);

export default PeriodListContainer;