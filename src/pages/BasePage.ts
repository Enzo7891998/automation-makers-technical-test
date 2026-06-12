import { Locator, Page } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;
  protected abstract readonly path: string;
  private readonly baseUrl = 'https://www.saucedemo.com';

  constructor(page: Page) {
    this.page = page;
  }

  async open(): Promise<void> {
    await this.page.goto(`${this.baseUrl}${this.path}`);
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  protected locator(selector: string): Locator {
    return this.page.locator(selector);
  }
}
