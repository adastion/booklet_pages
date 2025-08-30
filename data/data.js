export const data = {
  _allPages: 4,
  _bookletSize: 1,
  get allPages() {
    return this._allPages;
  },

  set allPages(value) {
    return typeof value === "number"
      ? (this._allPages = value)
      : (this._allPages = NaN);
  },

  get bookletSize() {
    return this._bookletSize;
  },

  set bookletSize(value) {
    return typeof value === "number"
      ? (this._bookletSize = value)
      : (this._bookletSize = NaN);
  },
  get bookletPages() {
    return this.bookletSize * 4;
  },
  get firstPageCount() {
    return 1;
  },
  get lastPageCount() {
    return this.bookletPages;
  },
  get pagesForPrint() {
    return Math.ceil(this.allPages / this.lastPageCount);
  },
  _resultArray: [],
  get resultArray() {
    return this._resultArray;
  },
  addToResultArray(value) {
    this._resultArray.push(value);
  },

  // Метод для очистки массива
  clearResultArray() {
    this._resultArray = [];
  },
};
