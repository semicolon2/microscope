import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Period from './Period';

class PeriodList extends PureComponent {

  onDragEnd = (result) => {

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
                    return <Period {...period} index={index} />
                  })}
                  {provided.placeholder}
                </div>
              )
            }
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

const PeriodListContainer = connect(mapStateToProps)(PeriodList);

export default PeriodListContainer;