import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { TestWorld } from './world';

setDefaultTimeout(60 * 1000);

Before(async function (this: TestWorld) {
  await this.init();
});

After(async function (this: TestWorld) {
  await this.dispose();
});
