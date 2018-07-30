import React, {PureComponent} from 'react';
import Event from './Event';

class EventContainer extends PureComponent {
  render() {
    return(
      <div className="flex flex-col items-start">
        <Event />
        <Event />
        <Event />
      </div>
    )
  }
}

export default EventContainer;