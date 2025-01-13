const getPercents = require('../index.js');

describe('getPercents', () => {

  test('should return 60 when 30% of 200', () => {
    expect(getPercents(30, 200)).toBe(60);
  });

  test('should return 0 when 0% of any number', () => {
    expect(getPercents(0, 200)).toBe(0);
  });

  test('should return NaN when there are no arguments', () => {
    expect(getPercents()).toBeNaN();
  });

  test('should return 300000 when 30% of 1000000', () => {
    expect(getPercents(30, 1000000)).toBe(300000);
  });
  

});
