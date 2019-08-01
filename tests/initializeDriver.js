import {Builder} from 'selenium-webdriver';

export async function initializeDriver() {
    return new Builder().forBrowser('chrome').build();
}