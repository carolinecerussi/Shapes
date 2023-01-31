import Rectangle from '../src/rectangle';

describe ('Rectangle', () => {
  test ('should correctly create a rectangle object with four lengths', () => {
    const rectangle = new Rectangle (2, 4, 2, 4);
    expect (rectangle.side1).toEqual (2);
    expect (rectangle.side2).toEqual (4);
    expect (rectangle.side3).toEqual (2);
    expect (rectangle.side4).toEqual (4);
  });

  //Check if three sides make a rectangle or not
  test ('should correctly determine whether four lengths are not a rectangle', () => {
    const notRectangle = new Rectangle (9, 6, 9, 9);
    expect (notRectangle.checkType ()).toEqual ('not a rectangle');
  });
});
