import React, { Component } from "react";

// TODO:
//  - CSV import button
//  - List element to select category
//  - dark / light mode toggle

export default class Controls extends Component {
  createCheckbox = lbl => {
    return (
      <div className="pretty p-switch p-fill">
        <input type="checkbox" name={lbl} id={lbl} value={lbl} />
        <div className="state p-primary">
          <label>{lbl}</label>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="controls">
        <h1>Options</h1>
        <form>
          <ul className="chkgrp">
            <li className="chkgrp-item">{this.createCheckbox("EMJ")}</li>
            <li className="chkgrp-item">{this.createCheckbox("A320")}</li>
            <li className="chkgrp-item">{this.createCheckbox("PAX")}</li>
          </ul>
          <hr />
          <button name="data">Load Data (*.csv)</button>
        </form>
      </div>
    );
  }
}
