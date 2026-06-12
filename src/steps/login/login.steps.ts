import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { TestWorld } from '../../support/world';

When(
  'the user enters username {string} and password {string}',
  async function (this: TestWorld, username: string, password: string) {
    await this.loginPage.login(username, password);
  }
);

Then('the user lands on the home page', async function (this: TestWorld) {
  const isLoaded = await this.homePage.isLoaded();
  expect(isLoaded).toBeTruthy();
  expect(await this.homePage.getCurrentUrl()).toContain('/inventory.html');
});

Then('an error message {string} is displayed', async function (this: TestWorld, expected: string) {
  const message = await this.loginPage.getErrorMessage();
  expect(message).toContain(expected);
});
