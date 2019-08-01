import {By, until} from 'selenium-webdriver';

/**
 * Class covers some create page elements
 */
export default class CreatePageScene {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Waits for create page to load
     */
    async waitForPage() {
        await this.driver.wait(until.urlContains(SELECTORS.promoCreateUrl), 10000);
    }

    /**
     * Get user name
     */
    async getUserName() {
        return this.driver.findElement(By.css(SELECTORS.loggedUserName)).getAttribute('innerText');
    }
}

const SELECTORS = {
    loggedUserName: '[class="signout"] [class="name"]',
    promoCreateUrl: 'https://promo.com/create'
}