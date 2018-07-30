import React, {PureComponent} from 'react';
import Scene from './Scene';

class SceneContainer extends PureComponent {
  render() {
    return(
      <div className="flex flex-col items-center mb-2">
        <Scene />
        <Scene />
      </div>
    )
  }
}

export default SceneContainer;