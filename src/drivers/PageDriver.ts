import { Browser, BrowserContext, Page, chromium } from '@playwright/test';

export class PageDriver {
  private browser?: Browser;
  private context?: BrowserContext;
  private page?: Page;

 async start(headless = true): Promise<Page> {
  this.browser = await chromium.launch({
    headless,
    slowMo: headless ? 0 : 2000
  });

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  return this.page;
}

  getPage(): Page {
    if (!this.page) {
      throw new Error('Page is not initialized. Call start() before accessing the page.');
    }
    return this.page;
  }

  async stop(): Promise<void> {
    await this.context?.close();
    await this.browser?.close();
    this.context = undefined;
    this.browser = undefined;
    this.page = undefined;
  }
}
