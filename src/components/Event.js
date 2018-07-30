import React, {PureComponent} from 'react';
import Tone from './Tone';
import Collapsible from 'react-collapsible';
import SceneList from './SceneList';

class Event extends PureComponent {
  render() {
    return (
      <div>
        <div className="card-border w-48 h-auto mb-0" >
          <div className="mt-1 mb-1 text-center">
            <Collapsible trigger={this.props.title} transitionTime={200}>
              <div className="p-1" >
                <p className="border-grey-darkest border-t" > {this.props.text} </p>
              </div>
            </Collapsible>
          </div>
          <Tone tone={this.props.tone} />
        </div>
        <SceneList scenes={this.props.scenes} />
      </div>
    )
  }
}


export default Event;