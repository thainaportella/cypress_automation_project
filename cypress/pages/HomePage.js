class HomePage {
    visit() {
        cy.visit('https://automationexercise.com/');
    }

    verifyHomeIsVisible() {
        cy.get('a[href="/"]').should('be.visible');
    }

    clickSignupLogin() {
        cy.contains('Signup / Login').click();
    }

    verifyLoggedInAs(name) {
        cy.contains(`Logged in as ${name}`).should('be.visible');
    }

    clickLogout() {
        cy.contains('Logout').click();
    }
}

export default new HomePage();