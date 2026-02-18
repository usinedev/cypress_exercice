/// <reference types="cypress" />
describe('Smoke test', () => {
    it('Application répond', () => {
    cy.visit('http://localhost:3000/');

    // cy.get(`[name="username"]`).type('Usertest');

    // cy.get(`[name="password"]`).type('1234');

    // cy.get(`button`).click();
});
});