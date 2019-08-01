import {By, until} from 'selenium-webdriver';

/**
 * Class covers some iframe windows behavior
 */
export default class IFrameElements {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Switch to proper visible iframe so driver can interacts with it's elements
     */
    async switchToIFrame(iframeName) {
        let iframeElement;
        if (iframeName === 'Login' || iframeName === 'Signup') {
            iframeElement = await this.driver.findElement(By.css(SELECTORS.iframeElementLoginSignup));
        } else if (iframeName === 'Welcome') {
            iframeElement = await this.driver.findElement(By.css(SELECTORS.iframeElementWelcome));
        }
        await this.driver.switchTo().frame(iframeElement);
    }

    /**
     * Close iframe window
     */
    async closeIFrameWindow() {
        await this.driver.findElement(By.css(SELECTORS.closeIFrame)).click();
    }
}

const SELECTORS = {
    iframeElementLoginSignup: '[class^="login-dialog"] iframe',
    iframeElementWelcome: '[class^="intercom"] iframe',
    closeIFrame: '[aria-label="Close"]'
}