import users from '../fixtures/users.json'

describe('Compra - SauceDemo', () => {
      it('Deve fazer login e finalizar a compra', () => {
    cy.login(users.valido.username, users.valido.password)
    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click()
    cy.get('[data-test="shopping-cart-link"]').should('be.visible').click()
    cy.get('.cart_item').should('have.length', 1)
    cy.get('[data-test="checkout"]').should('be.visible').click()
    cy.CompleteForm()
    cy.get('[data-test="finish"]').should('be.visible').click()
    cy.get('[data-test="back-to-products"]').click()
  })
})