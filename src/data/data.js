export const data = {
  _allPages: 4,
  _bookletSize: 1,
  get allPages() {
    return this._allPages;
  },
  set allPages(value) {
    return (
      typeof value === "number" && value <= 6000
        ? (this._allPages = value)
        : (this._allPages = NaN),
      this.notify()
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
      this.notify()
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
  _pagesA4: 0,
  initPagesA4() {
    this._pagesA4 = Math.ceil(this._allPages / 4);
    this.notify();
  },
  decrementA4() {
    this._pagesA4 -= this.bookletSize;
    this.notify();
  },
  incrementA4() {
    this._pagesA4 += this.bookletSize;
    this.notify();
  },
  get listInfo() {
    return [
      {
        name: "Требуется листов А4",
        value: this._pagesA4,
      },
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
    this._resultArray.push({ value: value, isActive: true });
    this.notify();
  },
  clearResultArray() {
    this._resultArray = [];
  },
  _subscribers: [],
  subscribe(subscriber) {
    this._subscribers.push(subscriber);
  },
  notify() {
    this._subscribers.forEach((subscriber) => subscriber());
  },
  setData(pages, bookletPages) {
    this._allPages = pages;
    this._bookletSize = bookletPages;
    this.notify();
  },
};
