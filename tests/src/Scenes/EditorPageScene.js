import {until} from 'selenium-webdriver';

/**
 * Class covers some editor page elements
 */
export default class EditorPageScene {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Waits for video editor page to load
     */
    async waitForPage() {
        await this.driver.wait(until.urlContains(SELECTORS.editorUrl), 10000);
    }
}

const SELECTORS = {
    editorUrl: 'https://promo.com/create-from'
}