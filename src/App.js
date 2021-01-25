import React from "react";
import Cell from "./components/Cell";
import "./CellManager";
import CellManager from "./CellManager";
import styles from "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.cellManager = new CellManager();
  }

  render() {
    const cells = this.cellManager
      .getCells()
      .map((cell) => <Cell key={cell.id} number={cell.number}></Cell>);
    return <div className={styles.container}>{cells}</div>;
  }
}

export default App;
