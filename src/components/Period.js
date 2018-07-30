import React, {PureComponent} from 'react';
import Tone from './Tone';
import EventList from './EventList';

class Period extends PureComponent {
  render() {
    return (
      <div className="flex flex-col items-center" >
        <div className="card-border w-32 h-48">
          <p className="text-center">{this.props.text}</p>
          <Tone tone={this.props.tone} />
        </div>
        <EventList events={this.props.events} />
      </div>
    )
  }
}

export default Period;