# HTML Semântico e Acessibilidade

> Objetivo: escrever interfaces compreensíveis para navegador, pessoas, leitores de tela, SEO e times de engenharia/design.

---

## 1. Fundamentos obrigatórios

Domine:

- estrutura de documento;
- headings;
- landmarks;
- links;
- botões;
- formulários;
- labels;
- inputs;
- listas;
- tabelas;
- imagens;
- `alt`;
- foco;
- teclado;
- ARIA;
- WCAG.

---

## 2. Regra principal

Não use `div` para tudo.

Antes de criar qualquer elemento, pergunte:

- isso é um botão?
- isso é um link?
- isso é navegação?
- isso é uma seção?
- isso é formulário?
- isso é lista?
- isso é conteúdo principal?

---

## 3. Projeto 1 — Página de produto semântica

Crie uma página de produto com:

- `header`;
- `nav`;
- `main`;
- `section`;
- `article` quando fizer sentido;
- `footer`;
- imagens com `alt`;
- botões corretos;
- links corretos.

---

## 4. Projeto 2 — Formulário acessível

Crie um formulário com:

- labels;
- mensagens de erro;
- descrição de campos;
- validação;
- foco no erro;
- `aria-invalid`;
- `aria-describedby`.

---

## 5. Projeto 3 — Navegação por teclado

Crie uma página onde tudo funciona sem mouse:

- links;
- botões;
- menu;
- modal;
- formulário;
- tabs.

---

## 6. Projeto 4 — Componentes com ARIA

Implemente:

- accordion;
- tabs;
- dialog;
- tooltip;
- dropdown.

---

## 7. Checklist WCAG prático

- [ ] botões são `button`;
- [ ] links são `a`;
- [ ] imagens relevantes têm `alt`;
- [ ] inputs têm label;
- [ ] foco é visível;
- [ ] contraste é suficiente;
- [ ] interface funciona por teclado;
- [ ] modal gerencia foco;
- [ ] erros são anunciáveis;
- [ ] headings seguem hierarquia;
- [ ] landmarks são usados corretamente.

---

## 8. Perguntas de entrevista

- Qual a diferença entre `button` e `a`?
- O que é HTML semântico?
- Quando usar ARIA?
- Por que ARIA ruim é pior que nenhum ARIA?
- Como testar acessibilidade?
- Como garantir navegação por teclado?
- Como criar um modal acessível?
