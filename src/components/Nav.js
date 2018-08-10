import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actionCreators";

class Nav extends PureComponent {
  handleDeleteClick = () => {
    this.props.toggleDelete();
  };

  render() {
    return (
      <div className="float-right w-64 h-full flex justify-center flex-wrap">
        <button
          onClick={this.handleDeleteClick}
          className="border border-red-dark bg-red-light rounded p-1 m-1 w-16"
        >
          Delete
        </button>
        <button className="border border-orange-dark bg-orange-light rounded p-1 m-1 w-16">
          Export
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    deletable: state.deletable
  };
}

const NavContainer = connect(
  mapStateToProps,
  actionCreators
)(Nav);

export default NavContainer;
