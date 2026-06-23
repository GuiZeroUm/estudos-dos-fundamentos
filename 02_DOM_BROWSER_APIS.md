# DOM e Browser APIs

> Objetivo: dominar a camada real do navegador para não depender cegamente de frameworks. A vaga da XXX pede experiência em vanilla JS/HTML/CSS e em ambientes com framework. Isso torna DOM obrigatório.

---

## 1. Tópicos obrigatórios

- `document.querySelector`;
- `querySelectorAll`;
- criação de elementos;
- atributos;
- classes;
- eventos;
- bubbling;
- capturing;
- event delegation;
- forms;
- foco;
- teclado;
- `localStorage`;
- `sessionStorage`;
- `URLSearchParams`;
- `IntersectionObserver`;
- `ResizeObserver`;
- `MutationObserver`;
- `requestAnimationFrame`;
- `AbortController`.

---

## 2. Projeto 1 — Lista manipulável

### O que construir

Uma lista com:

- adicionar item;
- remover item;
- editar item;
- marcar como ativo/inativo;
- filtrar;
- persistir no localStorage.

### O que aprender

- renderização manual;
- eventos;
- estado separado da UI;
- persistência;
- manipulação segura do DOM.

---

## 3. Projeto 2 — Tabs acessíveis

### Requisitos

- clique;
- teclado;
- `role="tablist"`;
- `role="tab"`;
- `role="tabpanel"`;
- `aria-selected`;
- foco controlado.

### Perguntas

- Como usuários de teclado navegam?
- O que leitores de tela precisam saber?
- Como garantir que apenas um painel esteja ativo?

---

## 4. Projeto 3 — Modal acessível

### Requisitos

- abrir e fechar;
- fechar com ESC;
- fechar ao clicar fora;
- prender foco;
- devolver foco ao botão inicial;
- `aria-modal`;
- `role="dialog"`.

### Perguntas

- O que é focus trap?
- Por que modal sem foco controlado é ruim?
- Como evitar scroll do fundo?
- Como destruir listeners ao fechar?

---

## 5. Projeto 4 — Autocomplete

### Requisitos

- input;
- lista de sugestões;
- navegação por setas;
- seleção com Enter;
- debounce;
- cancelamento de busca;
- loading;
- mensagem de vazio.

### Perguntas

- Como evitar requisições demais?
- Como impedir resposta antiga de sobrescrever resposta nova?
- Como tornar acessível?
- Como controlar foco?

---

## 6. Projeto 5 — Infinite Scroll

### Requisitos

- cards;
- carregar mais ao chegar no fim;
- `IntersectionObserver`;
- loading;
- fim da lista;
- tratamento de erro.

### Perguntas

- Por que `IntersectionObserver` é melhor que scroll listener?
- Como evitar chamadas simultâneas?
- Como preservar performance?

---

## 7. Projeto 6 — Virtualized List

### Requisitos

- renderizar 10.000 itens;
- mostrar apenas os visíveis;
- calcular altura total;
- posicionar elementos;
- scroll fluido.

### Perguntas

- Por que listas grandes travam?
- O que é virtualização?
- Como isso se conecta com React?

---

## 8. Checklist

- [ ] sei selecionar elementos;
- [ ] sei criar elementos;
- [ ] sei remover elementos;
- [ ] sei lidar com eventos;
- [ ] sei explicar bubbling/capturing;
- [ ] sei usar event delegation;
- [ ] sei manipular formulários;
- [ ] sei controlar foco;
- [ ] sei criar modal acessível;
- [ ] sei usar localStorage;
- [ ] sei usar IntersectionObserver;
- [ ] sei evitar memory leaks;
- [ ] sei separar estado e renderização.
