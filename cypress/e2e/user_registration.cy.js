/// <reference types="cypress" />

describe('User Registration Flow', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    });

    it('Should successfully register a new user', () => {
        // Verify that the home page is visible
        cy.get('a[href="/"]').should('be.visible');

        // Click on 'Signup / Login' button
        cy.contains('Signup / Login').click();

        // Verify 'New User Signup!' header is visible
        cy.contains('New User Signup!').should('be.visible');

        // Fill in Name and Email Address
        const uniqueId = Date.now();
        cy.get('[data-qa="signup-name"]').type('Thaina Portella');
        cy.get('[data-qa="signup-email"]').type(`thaina_${uniqueId}@test.com`);

        // Click 'Signup' button
        cy.get('[data-qa="signup-button"]').click();

        // Verify 'ENTER ACCOUNT INFORMATION' header is visible
        cy.contains('Enter Account Information').should('be.visible');

        // Fill Account Information (Title, Password, Date of Birth)
        // Filing gender
        cy.get('#id_gender2').check();

        // Filling Password
        cy.get('[data-qa="password"]').type('SuperSecretPassword123');

        // Selecting Date of Birth (Dropdowns)
        cy.get('[data-qa="days"]').select('6');
        cy.get('[data-qa="months"]').select('July');
        cy.get('[data-qa="years"]').select('1998');

        // Select Checkboxes
        cy.get('#newsletter').check();
        cy.get('#optin').check();

        // Fill Address Information
        cy.get('[data-qa="first_name"]').type('Thaina');
        cy.get('[data-qa="last_name"]').type('Portella');
        cy.get('[data-qa="company"]').type('QA Tech Solutions');
        cy.get('[data-qa="address"]').type('123 Automation Street, Apt 4B');
        cy.get('[data-qa="address2"]').type('Silicon Valley');
        
        // Selecting Country (Dropdown)
        cy.get('[data-qa="country"]').select('United States');
        
        cy.get('[data-qa="state"]').type('California');
        cy.get('[data-qa="city"]').type('Los Angeles');
        cy.get('[data-qa="zipcode"]').type('90001');
        cy.get('[data-qa="mobile_number"]').type('+1234567890');

        // Click 'Create Account' button
        cy.get('[data-qa="create-account"]').click();

        // Verify account creation success message
        cy.get('[data-qa="account-created"]').should('be.visible');
        cy.contains('Account Created!').should('be.visible');
    });

});