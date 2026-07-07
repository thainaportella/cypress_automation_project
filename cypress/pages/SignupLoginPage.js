class SignupLoginPage {
    verifySignupHeader() {
        cy.contains('New User Signup!').should('be.visible');
    }

    fillInitialSignup(name, email) {
        cy.get('[data-qa="signup-name"]').type(name);
        cy.get('[data-qa="signup-email"]').type(email);
    }

    clickSignupButton() {
        cy.get('[data-qa="signup-button"]').click();
    }

    
    verifyLoginHeader() {
        cy.contains('Login to your account').should('be.visible');
    }

    fillLoginCredentials(email, password) {
        cy.get('[data-qa="login-email"]').type(email);
        cy.get('[data-qa="login-password"]').type(password);
    }

    clickLoginButton() {
        cy.get('[data-qa="login-button"]').click();
    }

    verifyErrorMessage(message) {
        cy.contains(message).should('be.visible');
    }
}

export default new SignupLoginPage();