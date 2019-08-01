import {By, until} from 'selenium-webdriver';

/**
 * Class covers some wizard page elements
 */
export default class WizardPageScene {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Waits for wizard page to load
     */
    async waitForPage() {
        await this.driver.wait(until.urlContains(SELECTORS.wizarCreateUrl), 10000);
    }

    /**
     * Gets wizard h1 header
     */
    async getWizardHeader() {
        return this.driver.findElement(By.css(SELECTORS.wizardH1)).getAttribute('innerText');
    }

    /**
     * Click to skip choosing video on wizard page
     */
    async clickNoneOfAbove() {
        return this.driver.findElement(By.css(SELECTORS.noneOfAbove)).click();
    }

    /**
     * Click back button
     */
    async clickBack() {
        return this.driver.findElement(By.css(SELECTORS.backButton)).click();
    }

    /**
     * Click next button
     */
    async clickNext() {
        return this.driver.findElement(By.css(SELECTORS.nextButton)).click();
    }
}

const SELECTORS = {
    wizarCreateUrl: 'https://promo.com/create?mode=wizard',
    wizardH1: '[class="business-type"] h1',
    noneOfAbove: '[class="buttons"] div[class="none"]',
    backButton: '[class="back"]',
    nextButton: '[class="next"]'
}