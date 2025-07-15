# Cypress - Teste Simples de QA

Este projeto é um exemplo simples de automação de testes utilizando o [Cypress](https://www.cypress.io/). O objetivo é servir como estudo e prática de testes automatizados para QA.

## Sobre os testes

O projeto contém três testes principais:

1. **Login com dados válidos:**  
   O teste realiza o login com credenciais corretas e verifica se os itens esperados aparecem após o acesso.

2. **Login com dados inválidos:**  
   O teste tenta fazer login com dados incorretos e valida se a aplicação exibe uma mensagem de erro apropriada.

3. **Login com campos vazios:**  
   O teste verifica se o sistema impede o login quando os campos de usuário e senha estão vazios, mostrando a mensagem de validação correta.

## Como executar os testes

1. Instale as dependências do projeto:
   ```
   npm i
   ```

2. Abra o Cypress para executar os testes:
   ```
   npx cypress open
   ```

Os testes estão localizados na pasta [`cypress/e2e`](cypress/e2e/login.cy.js).

---

Este projeto é apenas para fins de estudo e demonstração do Cypress.