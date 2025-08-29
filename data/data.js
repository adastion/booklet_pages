export const data = {
  allPages: 366,
  bookletSize: 4,
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
  resultArray: [],
};
