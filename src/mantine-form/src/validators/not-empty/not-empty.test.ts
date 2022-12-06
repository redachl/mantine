import { notEmpty } from './not-empty';

const TEST_ERROR = 'not-empty-error';

describe('@mantine/form/notEmpty', () => {
  it('correctly detects empty values', () => {
    const validator = notEmpty(TEST_ERROR);
    expect(validator('')).toBe(TEST_ERROR);
    expect(validator('  ')).toBe(TEST_ERROR);
    expect(validator(null)).toBe(TEST_ERROR);
    expect(validator(undefined)).toBe(TEST_ERROR);
    expect(validator([])).toBe(TEST_ERROR);
  });

  it('correctly detects non empty values', () => {
    const validator = notEmpty(TEST_ERROR);
    expect(validator('1')).toBe(null);
    expect(validator(' 1 ')).toBe(null);
    expect(validator([1, 2, 3])).toBe(null);
    expect(validator(0)).toBe(null);
    expect(validator(10)).toBe(null);
    expect(validator(NaN)).toBe(null);
  });
});