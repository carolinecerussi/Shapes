export default function Square (side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;

  Square.prototype.checkType = function () {
    if (
      this.side1 !== this.side2 || this.side3 || this.side4)
{
      return 'not a square';
    } else if (
      this.side1 === this.side2 && this.side3 && this.side4
    ) 
      {
      return 'square!';
    }
  };
};
