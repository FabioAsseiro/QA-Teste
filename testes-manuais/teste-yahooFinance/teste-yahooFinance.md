# 🧪 Teste Manual – Bug no Yahoo Finance

### 📄 Descrição

O Yahoo Finance é uma ferramenta que acesso diariamente para acompanhar minha carteira de ações e outros ativos.  
Todos os dias pesquiso cerca de **30 ações diferentes**, até que percebi um **erro na pesquisa**:  
em alguns momentos, a URL muda, indicando que a pesquisa foi feita, mas a **visualização da página permanece com os dados anteriores**.

---

### 🔍 Cenário de Teste

**Passos para reproduzir o bug:**

1. Acesse o site:[Yahoo Finance](https://finance.yahoo.com)  
2. Clique no campo de pesquisa  
3. Digite e selecione uma ação (MXRF11, GARE11, etc)  
4. Em seguida, repita o processo para outra ação

---

### ✅ Resultado Esperado:

- A página deve atualizar e exibir corretamente os dados da nova ação pesquisada

---

### ❌ Resultado Atual:

- A visualização da página permanece com os dados da última ação pesquisada

---

### 🧠 Observações técnicas (opcional)

- O bug parece estar relacionado ao cache de componentes ou ao roteamento de páginas via JavaScript.
- Testado no navegador: Opera GX


### 📂 Evidência

[Veja o video aqui](/testes-manuais/teste-yahooFinance/evidencia/Bug%20Yahoo%20Finance.mp4)