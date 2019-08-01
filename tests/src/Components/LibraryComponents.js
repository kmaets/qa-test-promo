import {By} from 'selenium-webdriver';

/**
 * Class covers some library components of create page
 */
export default class LibraryComponents {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Moves mouse over first video to have on mouse over buttons visible
     */
    async moveMouseOverFirstVideo() {
        const firstVideo = await this.driver.findElement(By.css(SELECTORS.promoTemplatesContainer + ' ' + SELECTORS.firstVideo));
        const actions = this.driver.actions();
        await actions.move(firstVideo).perform();
    }

    /**
     * Clicks customize button to open video editor
     */
    async clickCustomize() {
        await this.driver.findElement(By.css(SELECTORS.customizeButton)).click();
    }
}

const SELECTORS = {
    promoTemplatesContainer: '[class="pc-results"]',
    firstVideo: 'div div[class^="pr-item"]:first-child',
    customizeButton: '[class$="pr-customize-btn"]'
}