import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import * as actionCreators from "../actionCreators";
import Period from "./Period";
import PeriodUndraggable from "./PeriodUndraggable";

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
            <PeriodUndraggable
              {...this.props.periods["periodStart"]}
              updatePeriod={this.props.updatePeriod}
            />
            {this.props.periodIds
              .filter(
                periodId =>
                  periodId !== "periodStart" && periodId !== "periodEnd"
              )
              .map((periodId, index) => {
                return (
                  <Period
                    {...this.props.periods[periodId]}
                    updatePeriod={this.props.updatePeriod}
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
            <PeriodUndraggable
              {...this.props.periods["periodEnd"]}
              updatePeriod={this.props.updatePeriod}
            />
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
