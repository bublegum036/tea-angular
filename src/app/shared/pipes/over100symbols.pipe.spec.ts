import { Over100symbolsPipe } from './over100symbols.pipe';

describe('Over100symbolsPipe', () => {
  it('create an instance', () => {
    const pipe = new Over100symbolsPipe();
    expect(pipe).toBeTruthy();
  });
});
