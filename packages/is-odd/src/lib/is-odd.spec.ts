import { isOdd } from './is-odd';

describe('isOdd', () => {
  it('should be odd', () => {
    expect(isOdd(11)).toEqual(true);
  });
  it('should not odd', () => {
    expect(isOdd(10)).toEqual(false);
  });
});
