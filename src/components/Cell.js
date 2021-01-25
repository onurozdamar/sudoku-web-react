import React from "react";
import styles from "./Cell.css";
import cn from "classnames";

class Cell extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selected: false,
      number: props.number,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      selected: !state.selected,
    }));
  }

  render() {
    return (
      <div
        className={cn(styles.cell, this.state.selected && styles.cellSelected)}
        onClick={this.handleClick}
      >
        {this.state.number}
      </div>
    );
  }
}

export default Cell;
