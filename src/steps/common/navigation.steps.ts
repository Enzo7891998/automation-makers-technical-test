import { Given } from '@cucumber/cucumber';
import { TestWorld } from '../../support/world';

Given('the user is on the login page', async function (this: TestWorld) {
  await this.loginPage.open();
});
