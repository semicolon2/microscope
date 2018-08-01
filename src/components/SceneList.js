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
        type="event"
        isDropDisabled={true}
      >
        {provided => (
          <div
            className="flex flex-col items-center mb-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {this.props.scenes
              .filter(scene => scene.eventId === this.props.eventId)
              .map((scene, index) => {
                return <Scene {...scene} key={scene.id} index={index} />;
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
    scenes: state.scenes,
    isDropDisabled: state.isDropDisabled.scene
  };
}

const SceneListContainer = connect(
  mapStateToProps,
  actionCreators
)(SceneList);

export default SceneListContainer;
