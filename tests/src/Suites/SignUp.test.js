import chromedriver from 'chromedriver';
import {expect} from 'chai';
import {initializeDriver} from '../../initializeDriver';
import * as TEST_PARAMETERS from '../../config/test.parameters';
import IFrameElements from '../Utils/IFrameElements';
import UserDataGenerator from '../Utils/UserDataGenerator';
import CreatePageScene from '../Scenes/CreatePageScene';
import MainPageScene from '../Scenes/MainPageScene';
import SignUpScene from '../Scenes/SignUpScene';
import WizardPageScene from '../Scenes/WizardPageScene';


describe('Sign up user in https://promo.com', function () {
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

    it('Should sign up user in https://promo.com, skip wizard and confirm user name', async function () {
        const userDataGenerator = new UserDataGenerator();
        const iframeElements = new IFrameElements(driver);
        const mainPageScene = new MainPageScene(driver);
        const signUpScene = new SignUpScene(driver);
        const wizardPageScene = new WizardPageScene(driver);
        const createPageScene = new CreatePageScene(driver);

        await mainPageScene.goToURL();
        await mainPageScene.clickSignUp();

        await iframeElements.switchToIFrame('Signup');

        await userDataGenerator.generateUserName();
        await userDataGenerator.generateUserEmail();

        await signUpScene.typeInName();
        await signUpScene.typeInEmail();
        await signUpScene.typeInPassword();
        await signUpScene.clickToSignUp();

        await wizardPageScene.waitForPage();
        const wizardHeader = await wizardPageScene.getWizardHeader();
        expect(wizardHeader).to.equal("Let's create beautiful marketing videos");

        await wizardPageScene.clickNoneOfAbove();
        await wizardPageScene.clickNext();

        await driver.sleep(6000); // Could not resolve this on given time to avoid sleep when waiting for iframe window
        await createPageScene.waitForPage();

        await iframeElements.switchToIFrame('Welcome');
        await iframeElements.closeIFrameWindow();
        await driver.switchTo().defaultContent();

        const userName = await createPageScene.getUserName();
        expect(userName).to.equal(TEST_PARAMETERS.signUpUserName);
    });
});
