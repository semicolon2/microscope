import React, { PureComponent } from "react";

export default class Nav extends PureComponent {
  render() {
    return (
      <div>
        <button>Delete</button>
        <button>Export</button>
        <button>View Users</button>
      </div>
    );
  }
}
