import { Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class LoginPage extends BasePage {
  protected readonly path = '/';

  private readonly usernameInput = '[data-test="username"]';
  private readonly passwordInput = '[data-test="password"]';
  private readonly loginButton = '[data-test="login-button"]';
  private readonly errorMessage = '[data-test="error"]';

  constructor(page: Page) {
    super(page);
  }

  async fillUsername(username: string): Promise<void> {
    await this.locator(this.usernameInput).fill(username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.locator(this.passwordInput).fill(password);
  }

  async submit(): Promise<void> {
    await this.locator(this.loginButton).click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.submit();
  }

  async getErrorMessage(): Promise<string> {
    return (await this.locator(this.errorMessage).textContent()) ?? '';
  }
}
