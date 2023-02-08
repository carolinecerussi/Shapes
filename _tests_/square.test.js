import Square from "../src/square";

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
    const squareResult = new Square (9, 6, 9, 9);
    expect (squareResult.side1).toEqual (9);
    expect (squareResult.side2).toEqual (6);
    expect (squareResult.side3).toEqual (9);
    expect (squareResult.side4).toEqual (9);
  });

  //check if it is a rectangle 
  test('should correctly determine if the shape is a rectangle based on parallel sides being equal to eachother', () => {
    const recResult = new Square (2,4,2,4);
    expect (recResult.side1).toEqual(2);
    expect(recResult.side2).toEqual(4);
    expect (recResult.side3).toEqual(2);
    expect(recResult.side4).toEqual(4);  })

})