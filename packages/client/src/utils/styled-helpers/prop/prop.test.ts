import {prop} from './prop';

describe('Test styled helpers - prop', () => {
  it('should be function', () => {
    expect(prop).toBeDefined();
    expect(typeof prop).toBe('function');
  });

  it('should return styled function', () => {
    const fn = prop('key');
    expect(fn).toBeDefined();
    expect(typeof fn).toBe('function');
  });

  it('should styled function return correct value when call with props', () => {
    const fn = prop('key', 'default');
    const props = {key: 'foo', name: 'bar'};
    expect(fn(props)).toBe('foo');
  });

  it('should styled function return undefined for non-existing key', () => {
    const fn = prop('keeey');
    const props = {key: 'foo'};
    expect(fn(props)).toBeUndefined();
  });

  it('should styled function return default value for non-existing key', () => {
    const fn = prop('keeey', 'default');
    const props = {key: 'foo'};
    expect(fn(props)).toBe('default');
  });
});
