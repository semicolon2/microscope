import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import * as actionCreators from "../actionCreators";
import Period from "./Period";

class PeriodList extends PureComponent {
  handleAddCard = () => {
    this.props.addPeriod();
  };

  render() {
    return (
      <Droppable droppableId="periods" direction="horizontal" type="period">
        {provided => (
          <div
            className="flex justify-center items-start mt-2 h-screen"
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
            <div
              className="card-border add-card w-32 h-48 trans hover:border-grey-dark hover:text-grey-darker hover:shadow-lg cursor-pointer"
              onClick={this.handleAddCard}
            >
              <p className="text-5xl">+</p>
            </div>
          </div>
        )}
      </Droppable>
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
