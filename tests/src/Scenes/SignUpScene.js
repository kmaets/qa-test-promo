import {By} from 'selenium-webdriver';
import * as TEST_PARAMETERS from '../../config/test.parameters';

/**
 * Class covers some login form
 */
export default class SignUpScene {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Types user name in sign up form. Try.. catch added just as example.
     */
    async typeInName() {
        try {
            await this.driver.findElement(By.css(SELECTORS.nameInput)).sendKeys(TEST_PARAMETERS.signUpUserName);
        } catch (e) {
            throw 'Could not type name. \n' + e;
        }
    }

    /**
     * Types user email in sign up form
     */
    async typeInEmail() {
        await this.driver.findElement(By.css(SELECTORS.emailInput)).sendKeys(TEST_PARAMETERS.signUpUserEmail);
    }

    /**
     * Types user password in sign up form
     */
    async typeInPassword() {
        await this.driver.findElement(By.css(SELECTORS.passwordInput)).sendKeys(TEST_PARAMETERS.LOGIN_USER_PASSWORD);
    }

    /**
     * Clicks submit sign up form
     */
    async clickToSignUp() {
        await this.driver.findElement(By.css(SELECTORS.signUpSubmit)).click();
    }
}

const SELECTORS = {
    nameInput: '[id="sui-full-name"]',
    emailInput: '[id="sui-email"]',
    passwordInput: '[id="sui-password"]',
    signUpSubmit: '[class="submit"]'
}