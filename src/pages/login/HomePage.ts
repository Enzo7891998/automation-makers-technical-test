import { Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class HomePage extends BasePage {
  protected readonly path = '/inventory.html';

  private readonly inventoryContainer = '[data-test="inventory-container"]';
  private readonly pageTitle = '.title';

  constructor(page: Page) {
    super(page);
  }

  async isLoaded(): Promise<boolean> {
    return this.locator(this.inventoryContainer).isVisible();
  }

  async getTitle(): Promise<string> {
    return (await this.locator(this.pageTitle).textContent()) ?? '';
  }
}
