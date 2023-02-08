export default class Triangle {
  constructor(side1,side2,side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}


checkType(){
  let triResult = "";
  if (
    this.side1 > this.side2 + this.side3 ||
    this.side2 > this.side1 + this.side3 ||
    this.side3 > this.side1 + this.side2
  ) {
    triResult= 'not a triangle';
  return triResult;
  } else if (
    this.side1 !== this.side2 &&
    this.side1 !== this.side3 &&
    this.side2 !== this.side3
  ) {
    triResult= 'scalene triangle';
    console.log(triResult);
    return triResult;
  } else if (this.side1 === this.side2 && this.side1 === this.side3) {
    triResult= 'equilateral triangle';
    console.log(triResult);
    return triResult;
  } else {
    triResult= 'isosceles triangle';
    console.log(triResult);
    return triResult;
  }
};



}