import {By} from 'selenium-webdriver';
import * as TEST_PARAMETERS from '../../config/test.parameters';

/**
 * Class covers some login form
 */
export default class LoginSene {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Types user email in login form
     */
    async typeInEmail() {
        await this.driver.findElement(By.css(SELECTORS.emailInput)).sendKeys(TEST_PARAMETERS.LOGIN_USER_EMAIL);
    }

    /**
     * Types user password in login form
     */
    async typeInPassword() {
        await this.driver.findElement(By.css(SELECTORS.passwordInput)).sendKeys(TEST_PARAMETERS.LOGIN_USER_PASSWORD);
    }

    /**
     * Clicks submit login form
     */
    async clickToLogin() {
        await this.driver.findElement(By.css(SELECTORS.loginSubmit)).click();
    }
}

const SELECTORS = {
    emailInput: '[id="sui-email"]',
    passwordInput: '[id="sui-password"]',
    loginSubmit: '[class="submit"]'
}