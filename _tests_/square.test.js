import Square from "../src/js/square";

describe ('Square', () => {
  test ('should correctly create a square object with four lengths', () => {
    const squareResult = new Square (2, 2, 2,2);
    expect (squareResult.side1).toEqual (2);
    expect (squareResult.side2).toEqual (2);
    expect (squareResult.side3).toEqual (2);
    expect (squareResult.side4).toEqual (2);

  });

  //Check if three sides make a square or not
  test ('should correctly determine whether four lengths are not a square', () => {
    const notSquare = new Square (9, 6, 9, 9);
    expect(notSquare.checkType()).toEqual("not a square, or a rectangle...just a quadrilateral");
  });

  //check if it is a rectangle 
  test('should correctly determine if the shape is a rectangle based on parallel sides being equal to eachother', () => {
    const recResult = new Square (2,4,2,4);
    expect(recResult.checkType()).toEqual("this is a rectangle");
 })

})