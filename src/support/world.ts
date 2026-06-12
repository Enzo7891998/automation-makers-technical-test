import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Page } from '@playwright/test';
import { PageDriver } from '../drivers/PageDriver';
import { HomePage } from '../pages/login/HomePage';
import { LoginPage } from '../pages/login/LoginPage';

export class TestWorld extends World {
  readonly driver: PageDriver;
  page!: Page;
  loginPage!: LoginPage;
  homePage!: HomePage;

  constructor(options: IWorldOptions) {
    super(options);
    this.driver = new PageDriver();
  }

  async init(): Promise<void> {
    const headless = process.env.HEADED !== 'true';
    this.page = await this.driver.start(headless);
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
  }

  async dispose(): Promise<void> {
    await this.driver.stop();
  }
}

setWorldConstructor(TestWorld);
