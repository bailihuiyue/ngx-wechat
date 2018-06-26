import { Module } from './.module';

describe('Module', () => {
  let Module: Module;

  beforeEach(() => {
    Module = new Module();
  });

  it('should create an instance', () => {
    expect(Module).toBeTruthy();
  });
});
