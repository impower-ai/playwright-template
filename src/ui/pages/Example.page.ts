import { Page } from "@playwright/test";
import { BasePage } from "playwright-utils";

export default class ExamplePage extends BasePage {

    public constructor(page: Page) {
        super(page);
    }

    public async isLoaded(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public async waitUntilLoaded(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}