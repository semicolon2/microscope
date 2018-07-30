import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Period from './Period';

class PeriodList extends PureComponent {
  render() {
    return(
      <div className="flex justify-center items-start mt-32 h-screen">
        {this.props.periods.map((period) => {
          return <Period {...period} />
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    periods: state.periods
  };
};

const PeriodListContainer = connect(mapStateToProps)(PeriodList);

export default PeriodListContainer;