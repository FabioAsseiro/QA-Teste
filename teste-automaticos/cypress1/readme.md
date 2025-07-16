# Cypress - Teste Simples de QA

Este projeto é um exemplo básico de automação de testes utilizando o [Cypress](https://www.cypress.io/).  
O objetivo é servir como estudo e prática de testes automatizados voltados para qualidade de software (QA).

## Sobre os testes

O projeto inclui os seguintes cenários de teste:

1. **Login com dados válidos**  
   Testa o fluxo de login com credenciais corretas e verifica se os elementos da tela de produtos são exibidos.

2. **Login com dados inválidos**  
   Realiza o login com usuário ou senha incorretos e valida se a aplicação exibe uma mensagem de erro adequada.

3. **Login com campos vazios**  
   Verifica se o sistema impede o login quando os campos de usuário e senha estão vazios, exibindo mensagens de validação.

4. **Fluxo completo de compra com sucesso**  
   Realiza login, adiciona um item ao carrinho, preenche os dados de checkout e finaliza a compra com sucesso.

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