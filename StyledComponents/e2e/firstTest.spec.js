describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have root screen', async () => {
    await expect(element(by.id('root'))).toBeVisible();
  });
})
