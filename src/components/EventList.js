import React, {PureComponent} from 'react';
import Event from './Event';

class EventList extends PureComponent {
  render() {
    return(
      <div className="flex flex-col items-start">
      {this.props.events.map((event) => {
          return <Event {...event} />
        })}
      </div>
    )
  }
}

export default EventList;