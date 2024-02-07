const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it('returns the correct result for a square array', function () {
    const square=[
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
    ];
    expect(unroll(square)).toEqual([1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10])
  });


it('returns the correct result for a smaller array with strings', function () {
  const smallSquare=[
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i']
  ];
  expect(unroll(smallSquare)).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
});

it('returns an empty array for an empty square', function () {
  const emptySquare = [];
  expect(unroll(emptySquare)).toEqual([]);
});

it('returns a single element array for a 1x1 square', function () {
  const singleElementSquare = [
    [42]
  ];
  expect(unroll(singleElementSquare)).toEqual([42]);
});

it('returns the correct result for a 2x2 square', function () {
  const twoByTwo = [
    [7,8],
    [9,10]
  ];
  expect(unroll(twoByTwo)).toEqual([7,8,10,9])
})

});
