import chromedriver from 'chromedriver';
import {initializeDriver} from '../../initializeDriver';
import IFrameElements from '../Utils/IFrameElements';
import LibraryComponents from '../Components/LibraryComponents';
import CreatePageScene from '../Scenes/CreatePageScene';
import EditorPageScene from '../Scenes/EditorPageScene';
import LoginSene from '../Scenes/LoginScene';
import MainPageScene from '../Scenes/MainPageScene';


describe('Select and open video from Promo Templates', function () {
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

    it('Should login in to https://promo.com, open first Promo Templates video and load editor page', async function () {
        const iframeElements = new IFrameElements(driver);
        const mainPageScene = new MainPageScene(driver);
        const loginSene = new LoginSene(driver);
        const createPageScene = new CreatePageScene(driver);
        const editorPageScene = new EditorPageScene(driver);
        const libraryComponents = new LibraryComponents(driver);

        await mainPageScene.goToURL();
        await mainPageScene.clickLogin();

        await iframeElements.switchToIFrame('Login');

        await loginSene.typeInEmail();
        await loginSene.typeInPassword();
        await loginSene.clickToLogin();

        await createPageScene.waitForPage();
        await driver.sleep(2000);

        await libraryComponents.moveMouseOverFirstVideo();
        await libraryComponents.clickCustomize();

        await editorPageScene.waitForPage();
    });
});
