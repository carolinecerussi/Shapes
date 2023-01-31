export default function Rectangle (side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;

  Rectangle.prototype.checkType = function () {
    if (
      this.side1 !== this.side2 &&
      this.side1 !== this.side4 &&
      this.side1 === this.side3 && 
      this.side2 === this.side4
    ) {
      return 'rectangle!';
    } else
      return 'not a rectangle';
    }
  };

