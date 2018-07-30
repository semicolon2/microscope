import React, {PureComponent} from 'react';
import Tone from './Tone';
import Collapsible from 'react-collapsible';
import Description from './Description';
import SceneContainer from './SceneContainer';

class Event extends PureComponent {
  render() {
    return (
      <div>
        <div className="card-border w-48 h-auto mb-0" >
          <p className="text-center" >Title of Event</p>
          <div className="mt-1 mb-1 text-center">
            <Collapsible trigger="expand..." triggerWhenOpen="...contract" transitionTime={200}>
              <Description />
            </Collapsible>
          </div>
          <Tone light />
        </div>
        <SceneContainer />
      </div>
    )
  }
}


export default Event;