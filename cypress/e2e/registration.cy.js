import homePage from '../pages/HomePage';
import signupLoginPage from '../pages/SignupLoginPage';
import registerPage from '../pages/RegisterPage';

describe('User Registration Flow', () => {
    let userData;

    beforeEach(() => {
        cy.fixture('data').then((data) => {
            userData = data;
        });

        homePage.visit();
    });

    it('Should successfully register a new user using POM and Fixtures', () => {
        const uniqueId = Date.now();
        const email = `thaina_${uniqueId}@test.com`;

        homePage.verifyHomeIsVisible();
        homePage.clickSignupLogin();

        signupLoginPage.verifySignupHeader();
        signupLoginPage.fillInitialSignup('Thaina Portella', email);
        signupLoginPage.clickSignupButton();

        registerPage.verifyAccountInformationHeader();
        
        registerPage.fillAccountInformation(
            userData.password, 
            userData.day, 
            userData.month, 
            userData.year
        );
        
        registerPage.fillAddressInformation(
            userData.firstName,
            userData.lastName,
            userData.company,
            userData.address1,
            userData.address2,
            userData.country,
            userData.state,
            userData.city,
            userData.zipcode,
            userData.mobile
        );

        registerPage.clickCreateAccount();

        registerPage.verifySuccessMessage();
    });
});