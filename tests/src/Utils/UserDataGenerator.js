import * as TEST_PARAMETERS from '../../config/test.parameters';

/**
 * Class used to generate needed user data for sign up 
 */
export default class UserDataGenerator {
    constructor() {
    }

    /**
     * Generates date stamp to avoid duplicates in user data
     */
    async generateRandomString() {
        const date = new Date();
        return date.getDate() + '' + date.getHours() + '' + date.getMinutes() + '' + date.getSeconds();
    }

    /**
     * Generates user name
     */
    async generateUserName() {
        const randomString = await this.generateRandomString();
        TEST_PARAMETERS.signUpUserName = `Promo Test${randomString}`;
    }

    /**
     * Generates user email
     */
    async generateUserEmail() {
        const randomString = await this.generateRandomString();
        TEST_PARAMETERS.signUpUserEmail = `promokamreq+${randomString}@gmail.com`;
    }
}