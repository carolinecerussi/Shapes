import Pentagon from "../src/js/pentagon";

describe ('Pentagon', () => {
  test ('should correctly determine if it is an pentagon if the sides are all equal', () => {
    const pentResult = new Pentagon (2, 2, 2,2,2);
    expect (pentResult.side1).toEqual (2);
    expect (pentResult.side2).toEqual (2);
    expect (pentResult.side3).toEqual (2);
    expect (pentResult.side4).toEqual (2);
    expect (pentResult.side5).toEqual (2);
  });

  //Check if three sides make a square or not
  test ('should correctly determine whether five lengths are not a pentagon', () => {
    const pentResult = new Pentagon (2, 4, 2,2,2);
    expect (pentResult.side1).toEqual (2);
    expect (pentResult.side2).toEqual (4);
    expect (pentResult.side3).toEqual (2);
    expect (pentResult.side4).toEqual (2);
    expect (pentResult.side5).toEqual (2);
  });
});


