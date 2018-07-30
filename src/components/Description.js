import React, {PureComponent} from 'react';

class Description extends PureComponent {
  render() {
    return (
      <div className="text-left pl-2 pr-2" >
        <p>Description of event, should be fairly long and descriptive, making the event start and end totally clear</p>
      </div>
    )
  }
}

export default Description;