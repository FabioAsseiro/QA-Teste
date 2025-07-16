describe('Login - SauceDemo', () => {
  it('Deve fazer login com usuário válido', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click()
    cy.get('[data-test="shopping-cart-link"]').should('be.visible').click()
    cy.get('.cart_item').should('have.length', 1)
    cy.get('[data-test="checkout"]').should('be.visible').click()
    cy.get('[data-test="firstName"]').type('John')
    cy.get('[data-test="lastName"]').type('James')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()
  })

  it.skip('Deve mostrar erro ao tentar login com usuário inválido', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it.skip('Deve mostrar que os campos são obrigatórios', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
  })
})
