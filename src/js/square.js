export default class Square {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }

  checkType() {
    let squareResult = "";
    if (((this.side1 && this.side2 && this.side3) != this.side4) && ((this.side1 == this.side3) && (this.side2 == this.side4))) {
      squareResult = "this is a rectangle";
      console.log(squareResult);
      return squareResult;
    }
    else if (this.side1 == this.side2 == this.side3 == this.side4) {
      squareResult = 'this is a square';
      console.log(squareResult);
      return squareResult;
    }
    else {
      squareResult = "not a square, or a rectangle...just a quadrilateral";
      console.log(squareResult);
      return squareResult;

    };

  };
};

