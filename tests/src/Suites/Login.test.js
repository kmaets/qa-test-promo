import chromedriver from 'chromedriver';
import {expect} from 'chai';
import {initializeDriver} from '../../initializeDriver';
import * as TEST_PARAMETERS from '../../config/test.parameters';
import IFrameElements from '../Utils/IFrameElements';
import CreatePageScene from '../Scenes/CreatePageScene';
import LoginSene from '../Scenes/LoginScene';
import MainPageScene from '../Scenes/MainPageScene';


describe('Log in user to https://promo.com', function () {
    this.timeout(60000);

    let driver;

    before(async function () {
        await chromedriver.start();
        driver = await initializeDriver();
        await driver.manage().window().maximize();
    });

    after(async function () {
        await driver.quit();
        await chromedriver.stop();
    });

    it('Should login in to https://promo.com and confirm logged user name', async function () {
        const iframeElements = new IFrameElements(driver);
        const mainPageScene = new MainPageScene(driver);
        const loginSene = new LoginSene(driver);
        const createPageScene = new CreatePageScene(driver);

        await mainPageScene.goToURL();
        await mainPageScene.clickLogin();

        await iframeElements.switchToIFrame('Login');

        await loginSene.typeInEmail();
        await loginSene.typeInPassword();
        await loginSene.clickToLogin();

        await createPageScene.waitForPage();
        await driver.sleep(2000);

        const userName = await createPageScene.getUserName();
        expect(userName).to.equal(TEST_PARAMETERS.LOGIN_USER_NAME);
    });
});
