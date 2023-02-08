export default class Pentagon {
  constructor(side1, side2, side3, side4, side5) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
    this.side5 = side5;
  }

  checkType() {
    let pentResult = "";
    if (((this.side1 && this.side2 && this.side3 && this.side4) != this.side5)) {
      expect(pentResult.checkType()).toEqual("this is not a pentagon");
      console.log(pentResult);

    }
    else if ((this.side1 === this.side2) && (this.side2 === this.side3) && (this.side3 === this.side4) && (this.side4 === this.side5)) {
      expect(pentResult.checkType()).toEqual("this is a pentagon");
      console.log(pentResult);
    }
    else {
      pentResult = "not a pentagon";
      console.log(pentResult);
    }
  };
};

