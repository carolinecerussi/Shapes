export default function Pentagon (side1, side2, side3, side4, side5) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
  this.side5 = side5;

  Pentagon.prototype.checkType = function () {
    let pentResult = "";
    if (((this.side1 && this.side2 && this.side3 && this.side4) != this.side5)){ 
      pentResult = "this is not a pentagon";
      console.log(Pentagon);
    }
  else if ((this.side1 && this.side2 && this.side3 && this.side4) === this.side5)
      {
      pentResult = 'this is a pentagon';
      console.log(Pentagon);
    }
    else {
      pentResult = "not a pentagon";
    }
  };
};
