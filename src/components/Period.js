import React, {PureComponent} from 'react';
import Tone from './Tone';
import EventContainer from './EventContainer';

class Period extends PureComponent {
  render() {
    return (
      <div className="flex flex-col items-center" >
        <div className="card-border w-32 h-48">
          <p className="text-center">Short title of period, could be a little long but this is the only thing on it</p>
          <Tone />
        </div>
        <EventContainer />
      </div>
    )
  }
}

export default Period;