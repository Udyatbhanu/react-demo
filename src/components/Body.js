import React, { Component } from "react";

import ElementOne from "./body-elements/ElementOne";
import ElementTwo from "./body-elements/ElementTwo";
import TableComponent from "./body-elements/TableComponent";

class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <ElementOne />
          <TableComponent />
          <ElementTwo />
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
