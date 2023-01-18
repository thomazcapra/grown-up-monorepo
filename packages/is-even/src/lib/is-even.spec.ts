import { isEven } from './is-even';

describe('isEven', () => {
  it('should be even', () => {
    expect(isEven(10)).toEqual(true);
  });
  it('should not be even', () => {
    expect(isEven(11)).toEqual(false);
  });
});
