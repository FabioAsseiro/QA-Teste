describe('Login - SauceDemo', () => {
  it('Deve fazer login com usuário válido', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
  })

  it('Deve mostrar erro ao tentar login com usuário inválido', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it('Deve mostrar que os campos são obrigatórios', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
  })
})

