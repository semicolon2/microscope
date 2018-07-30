import React, {PureComponent} from 'react';
import Scene from './Scene';

class SceneList extends PureComponent {
  render() {
    return(
      <div className="flex flex-col items-center mb-2">
        {this.props.scenes.map((scene) => {
          return <Scene {...scene} />
        })}
      </div>
    )
  }
}

export default SceneList;