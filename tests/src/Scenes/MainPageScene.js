import {By} from 'selenium-webdriver';
import * as TEST_PARAMETERS from '../../config/test.parameters';

/**
 * Class covers some main page elements
 */
export default class MainPageScene {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Pass URL to open it in browser
     */
    async goToURL() {
        await this.driver.get(TEST_PARAMETERS.PROMO_URL);
    }

    /**
     * Clicks login to open form
     */
    async clickLogin() {
        await this.driver.findElement(By.css(SELECTORS.login)).click();
    }

    /**
     * Clicks sing up to open form
     */
    async clickSignUp() {
        await this.driver.findElement(By.css(SELECTORS.signUp)).click();
    }
}

const SELECTORS = {
    login: '[class^="signin"]',
    signUp: '[class^="signup"]',
}