import React, {PureComponent} from 'react';
import Period from './Period';

class PeriodContainer extends PureComponent {
  render() {
    return(
      <div className="flex justify-center items-center h-screen">
        <Period />
        <Period />
        <Period />
      </div>
    )
  }
}

export default PeriodContainer;