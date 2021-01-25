class CellManager {
  constructor() {
    this.state = {
      selectedNumber: null,
      array: [
        {
          id: 1,
          number: 1,
        },
        {
          id: 2,
          number: 2,
        },
      ],
    };
  }

  getCells() {
    return this.state.array;
  }
}
export default CellManager;
