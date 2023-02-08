export default function Square (side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;

  Square.prototype.checkType = function () {
    let recResult = "";
    let squareResult = "";
    if (((this.side1 && this.side2 && this.side3) != this.side4) && ((this.side1 === this.side3) && (this.side2 === this.side4))) { 
      recResult = "this is a rectangle";
      console.log(Square);
    }
  else if ((this.side1 && this.side2 && this.side3) === this.side4)
      {
      squareResult = 'this is a square';
      console.log(Square);
    }
    else {
      squareResult = "not a square, or a rectangle...just a quadrilateral";
    }
  };
};
