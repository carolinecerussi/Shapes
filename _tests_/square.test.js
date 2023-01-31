import Square from "../src/square";

describe ('Square', () => {
  test ('should correctly create a square object with four lengths', () => {
    const square = new Square (2, 2, 2,2);
    expect (square.side1).toEqual (2);
    expect (square.side2).toEqual (2);
    expect (square.side3).toEqual (2);
    expect (square.side4).toEqual (2);

  });

  //Check if three sides make a square or not
  test ('should correctly determine whether four lengths are not a square', () => {
    const notSquare = new Square (3, 9, 2,7);
    expect (notSquare.checkType ()).toEqual ('not a square');
  });

})