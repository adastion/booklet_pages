export const data = {
  _allPages: 4,
  _bookletSize: 1,
  get allPages() {
    return this._allPages;
  },

  set allPages(value) {
    return (
      typeof value === "number"
        ? (this._allPages = value)
        : (this._allPages = NaN),
      this.noify()
    );
  },

  get bookletSize() {
    return this._bookletSize;
  },

  set bookletSize(value) {
    return (
      typeof value === "number"
        ? (this._bookletSize = value)
        : (this._bookletSize = NaN),
      this.noify()
    );
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
  get listInfo() {
    return [
      {
        name: "Всего буклетов",
        value: this.resultArray.length,
      },
      {
        name: "Cтраниц в буклете",
        value: this.bookletPages,
      },
      {
        name: "Страниц в книге",
        value: this.allPages,
      },
    ];
  },
  addToResultArray(value) {
    this._resultArray.push(value);
    this.noify();
  },
  clearResultArray() {
    this._resultArray = [];
  },
  _subscribers: [],
  subscribe(subscriber) {
    return this._subscribers.push(subscriber);
  },
  noify() {
    return this._subscribers.forEach((subscriber) => subscriber());
  },
  setData(pages, bookletPages) {
    return (
      (this._allPages = pages), (this._bookletSize = bookletPages), this.noify()
    );
  },
};
