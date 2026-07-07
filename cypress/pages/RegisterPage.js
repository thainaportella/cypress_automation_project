class RegisterPage {
    verifyAccountInformationHeader() {
        cy.contains('Enter Account Information').should('be.visible');
    }

    fillAccountInformation(password, day, month, year) {
        cy.get('#id_gender2').check();
        cy.get('[data-qa="password"]').type(password);
        cy.get('[data-qa="days"]').select(day);
        cy.get('[data-qa="months"]').select(month);
        cy.get('[data-qa="years"]').select(year);
        cy.get('#newsletter').check();
        cy.get('#optin').check();
    }

    fillAddressInformation(firstName, lastName, company, address1, address2, country, state, city, zipcode, mobile) {
        cy.get('[data-qa="first_name"]').type(firstName);
        cy.get('[data-qa="last_name"]').type(lastName);
        cy.get('[data-qa="company"]').type(company);
        cy.get('[data-qa="address"]').type(address1);
        cy.get('[data-qa="address2"]').type(address2);
        cy.get('[data-qa="country"]').select(country);
        cy.get('[data-qa="state"]').type(state);
        cy.get('[data-qa="city"]').type(city);
        cy.get('[data-qa="zipcode"]').type(zipcode);
        cy.get('[data-qa="mobile_number"]').type(mobile);
    }

    clickCreateAccount() {
        cy.get('[data-qa="create-account"]').click();
    }

    verifySuccessMessage() {
        cy.get('[data-qa="account-created"]').should('be.visible');
        cy.contains('Account Created!').should('be.visible');
    }
}

export default new RegisterPage();