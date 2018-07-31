import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actionCreators';
import Scene from './Scene';

class SceneList extends PureComponent {
  render() {
    return(
      <div className="flex flex-col items-center mb-2">
        {this.props.scenes.filter(scene => scene.eventId === this.props.eventId).map((scene) => {
            return <Scene {...scene} key={scene.id} />
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    scenes: state.scenes
  }
}

const SceneListContainer = connect(mapStateToProps, actionCreators)(SceneList);

export default SceneListContainer;