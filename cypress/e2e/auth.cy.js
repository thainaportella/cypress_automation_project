import homePage from '../pages/HomePage';
import signupLoginPage from '../pages/SignupLoginPage';
import registerPage from '../pages/RegisterPage'; // Importamos a página de registro também!

describe('Authentication Flow', () => {
    let userData;

    beforeEach(() => {
        cy.fixture('data').then((data) => {
            userData = data;
        });
        homePage.visit();
    });

    it('Should not login with invalid credentials', () => {
        homePage.clickSignupLogin();
        signupLoginPage.verifyLoginHeader();
        signupLoginPage.fillLoginCredentials(userData.invalidEmail, userData.password);
        signupLoginPage.clickLoginButton();
        signupLoginPage.verifyErrorMessage('Your email or password is incorrect!');
    });

    it('Should register a new user, logout, and login successfully', () => {
        // Creating a new user
        const uniqueId = Date.now();
        const dynamicEmail = `thaina_auth_${uniqueId}@test.com`;

        homePage.clickSignupLogin();
        signupLoginPage.fillInitialSignup('Thaina Portella', dynamicEmail);
        signupLoginPage.clickSignupButton();
        
        registerPage.fillAccountInformation(userData.password, userData.day, userData.month, userData.year);
        registerPage.fillAddressInformation(
            userData.firstName, userData.lastName, userData.company, 
            userData.address1, userData.address2, userData.country, 
            userData.state, userData.city, userData.zipcode, userData.mobile
        );
        registerPage.clickCreateAccount();
        registerPage.verifySuccessMessage();

        // Logging out from the user just created
        homePage.clickLogout();

        // Logging in with the same user to check if the user creation worked
        signupLoginPage.verifyLoginHeader();
        signupLoginPage.fillLoginCredentials(dynamicEmail, userData.password);
        signupLoginPage.clickLoginButton();

        homePage.verifyLoggedInAs(userData.firstName);
    });
});