import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import * as actionCreators from "../actionCreators";
import Scene from "./Scene";

class SceneList extends PureComponent {
  render() {
    return (
      <Droppable
        droppableId={this.props.eventId}
        type="scene"
        isDropDisabled={false}
      >
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
                />
              );
            })}
            {provided.placeholder}
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
