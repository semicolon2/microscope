import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import * as actionCreators from "../actionCreators";
import Scene from "./Scene";

class SceneList extends PureComponent {
  handleAddCard = () => {
    this.props.addScene(this.props.eventId);
  };

  render() {
    return (
      <Droppable droppableId={this.props.eventId} type="scene">
        {provided => (
          <div
            className="flex flex-col items-center mb-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {this.props.sceneIds.map((sceneId, index) => {
              return (
                <Scene
                  {...this.props.scenes[sceneId]}
                  key={sceneId}
                  index={index}
                  eventIsDragging={this.props.eventIsDragging}
                  updateScene={this.props.updateScene}
                />
              );
            })}
            {provided.placeholder}
            <div
              className="add-card border rounded w-48 border-t-0 rounded-t-none trans hover:border-grey-dark hover:text-grey-darker hover:shadow-lg cursor-pointer"
              onClick={this.handleAddCard}
            >
              <p className="text-3xl">+</p>
            </div>
          </div>
        )}
      </Droppable>
    );
  }
}

function mapStateToProps(state) {
  return {
    scenes: state.scenes.byId
  };
}

const SceneListContainer = connect(
  mapStateToProps,
  actionCreators
)(SceneList);

export default SceneListContainer;
