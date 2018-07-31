import React, {PureComponent} from 'react';
import Tone from './Tone';
import Collapsible from 'react-collapsible';
import SceneList from './SceneList';

class Event extends PureComponent {

  toneTrigger = (
    <div className="flex justify-around m-1 items-center" > 
      <p>{this.props.title}</p>
      <Tone toneHeight="h-6" tone={this.props.tone} />
    </div>)

  render() {
    return (
      <div>
        <div className="card-border w-48 h-auto mb-0" >
        <span className="drag-handle"></span>
          <div className="mt-1 mb-1 text-center">
            <Collapsible trigger={this.toneTrigger} transitionTime={200}>
              <div className="p-1" >
                <p className="border-grey-darkest border-t" > {this.props.text} </p>
              </div>
            </Collapsible>
          </div>
        </div>
        <SceneList scenes={this.props.scenes} />
      </div>
    )
  }
}


export default Event;