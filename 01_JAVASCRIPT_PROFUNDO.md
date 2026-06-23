# JavaScript Profundo — Roteiro direcionado para XXX Front-End Engineer

> Este é seu foco atual. O objetivo não é apenas revisar JavaScript “do zero”, mas construir a base técnica usada em entrevistas de front-end: raciocínio, domínio da linguagem, arrays, strings, objetos, assíncrono, DOM, closures, performance e clareza de explicação.

---

## 0. Como usar este roteiro

Para cada projeto:

1. Leia o enunciado.
2. Escreva comentários com o passo a passo antes de codar.
3. Implemente uma versão simples.
4. Teste com vários casos.
5. Refatore.
6. Escreva um README curto.
7. Explique em voz alta como se estivesse em entrevista.
8. Faça commit.

Seu README deve ter:

- problema;
- entrada e saída;
- abordagem;
- edge cases;
- complexidade, quando fizer sentido;
- o que você aprendeu.

---

# Nível 1 — Fundamentos de linguagem

## Projeto 1.1 — Conversor de unidades

### Conceitos treinados

- funções;
- parâmetros;
- retorno;
- tipos primitivos;
- conversão de tipos;
- operadores;
- validação.

### O que construir

Crie funções puras para converter:

- Celsius para Fahrenheit;
- Fahrenheit para Celsius;
- km para milhas;
- milhas para km;
- kg para libras;
- libras para kg;
- minutos para horas e minutos;
- valor monetário com taxa informada.

### Requisitos

- A função deve retornar valor, não imprimir.
- Tratar entrada inválida.
- Separar cálculo de formatação.
- Criar pelo menos 10 testes manuais.

### Exemplo

```js
celsiusParaFahrenheit(25); // 77
kmParaMilhas(10); // 6.21
formatarMinutos(135); // "2h 15min"
```

### Perguntas de entrevista

- Qual a diferença entre `return` e `console.log`?
- O que acontece se a entrada for string?
- Como evitar bugs com arredondamento?
- Como você testaria essas funções?

---

## Projeto 1.2 — FizzBuzz configurável

### Conceitos treinados

- `for`;
- condicionais;
- operador `%`;
- arrays;
- extensibilidade;
- clareza de código.

### O que construir

Primeiro implemente o FizzBuzz clássico.

Depois crie uma versão configurável:

```js
fizzBuzzComRegras(15, [
  { multiplo: 3, texto: "Fizz" },
  { multiplo: 5, texto: "Buzz" },
  { multiplo: 7, texto: "Bang" }
]);
```

### Requisitos

- Retornar array.
- Não imprimir dentro da função.
- Permitir novas regras sem alterar a lógica principal.
- Tratar `n <= 0`.
- Tratar regras inválidas.

### Perguntas de entrevista

- Por que a ordem das regras importa?
- Como tornar o código extensível?
- Qual a complexidade de tempo?
- Como testar edge cases?

---

## Projeto 1.3 — Verificador de senha forte

### Conceitos treinados

- strings;
- regex;
- booleanos;
- operadores lógicos;
- retorno estruturado;
- validação.

### O que construir

Uma função que retorna:

```js
{
  valida: boolean,
  score: number,
  problemas: string[],
  sugestoes: string[]
}
```

### Regras

- mínimo 8 caracteres;
- letra maiúscula;
- letra minúscula;
- número;
- símbolo;
- sem espaços no início/fim;
- sem sequências óbvias como `123456`, `abcdef`, `password`.

### Perguntas de entrevista

- Como validar com e sem regex?
- Como separar regra de mensagem?
- Como internacionalizar mensagens?
- Como transformar isso em validação de formulário?

---

# Nível 2 — Arrays, strings e objetos

## Projeto 2.1 — Estatísticas de números

### Conceitos treinados

- arrays;
- `for`;
- `reduce`;
- ordenação;
- imutabilidade;
- edge cases.

### O que construir

Funções para calcular:

- soma;
- média;
- maior;
- menor;
- mediana;
- moda;
- amplitude;
- valores únicos;
- valores duplicados.

### Requisitos

- Não alterar o array original.
- Tratar array vazio.
- Ignorar ou rejeitar valores inválidos.
- Criar uma versão com `for`.
- Criar uma versão com métodos de array.

### Exemplo

```js
estatisticas([4, 8, 15, 16, 23, 42]);
```

### Perguntas de entrevista

- `sort` altera o array original?
- Quando usar `reduce`?
- Como calcular mediana?
- Qual a complexidade?
- Como lidar com 1 milhão de itens?

---

## Projeto 2.2 — Analisador de texto

### Conceitos treinados

- strings;
- normalização;
- `split`;
- `replace`;
- `toLowerCase`;
- `Map`;
- frequência.

### O que construir

Receba um texto e retorne:

- total de palavras;
- caracteres com espaços;
- caracteres sem espaços;
- frases;
- palavra mais frequente;
- top 5 palavras;
- palavras únicas;
- média de tamanho das palavras.

### Requisitos

- Ignorar pontuação.
- Ignorar maiúsculas/minúsculas.
- Remover acentos.
- Permitir lista de stopwords.
- Usar objeto em uma versão e `Map` em outra.

### Perguntas de entrevista

- Como remover acentos?
- Quando usar objeto e quando usar `Map`?
- Como contar frequência?
- Como processar texto grande?
- Qual a complexidade?

---

## Projeto 2.3 — Agenda de contatos

### Conceitos treinados

- objetos;
- array de objetos;
- CRUD;
- busca;
- atualização;
- remoção;
- validação;
- identidade.

### O que construir

Funções:

- `adicionarContato`;
- `listarContatos`;
- `buscarPorNome`;
- `buscarPorEmail`;
- `atualizarContato`;
- `removerContato`;
- `ordenarPorNome`;
- `filtrarPorDominioEmail`.

### Estrutura

```js
{
  id: "1",
  nome: "Ana",
  telefone: "9999-9999",
  email: "ana@email.com",
  tags: ["cliente"],
  criadoEm: "2026-06-23T00:00:00.000Z"
}
```

### Perguntas de entrevista

- Por que usar `id`?
- Como evitar mutação acidental?
- Como atualizar apenas um campo?
- Como buscar de forma eficiente?
- Como persistir depois?

---

## Projeto 2.4 — Carrinho de compras

### Conceitos treinados

- `map`;
- `filter`;
- `reduce`;
- objetos;
- imutabilidade;
- regras de negócio.

### O que construir

Um carrinho com:

- adicionar item;
- remover item;
- atualizar quantidade;
- subtotal;
- desconto;
- frete;
- total;
- filtro por preço;
- agrupamento por categoria.

### Perguntas de entrevista

- Como `reduce` ajuda em agregações?
- Como lidar com dinheiro?
- Como separar domínio de UI?
- Como aplicar múltiplas regras sem bagunçar?

---

# Nível 3 — Algoritmos essenciais

## Projeto 3.1 — Palíndromo e anagrama

### Conceitos treinados

- normalização;
- two pointers;
- ordenação;
- mapa de frequência;
- Big O.

### O que construir

Implemente:

- `ehPalindromo(texto)`;
- `saoAnagramasComSort(a, b)`;
- `saoAnagramasComFrequencia(a, b)`;
- `normalizarTexto(texto)`.

### Perguntas de entrevista

- Qual abordagem é mais eficiente?
- Como ignorar acentos?
- Como resolver com two pointers?
- Qual a complexidade?

---

## Projeto 3.2 — Biblioteca de algoritmos base

### Conceitos treinados

- recursão;
- iteração;
- busca;
- ordenação;
- Big O.

### O que construir

Implemente:

- fatorial iterativo;
- fatorial recursivo;
- Fibonacci recursivo;
- Fibonacci com memoization;
- busca linear;
- busca binária;
- bubble sort;
- selection sort;
- merge sort.

### Perguntas de entrevista

- Por que Fibonacci recursivo puro é ruim?
- O que é memoization?
- Quando usar busca binária?
- O que significa O(n log n)?

---

## Projeto 3.3 — Utilitários estilo entrevista

### Conceitos treinados

- closures;
- higher-order functions;
- edge cases;
- implementação nativa.

### O que construir do zero

- `map`;
- `filter`;
- `reduce`;
- `once`;
- `memoize`;
- `debounce`;
- `throttle`;
- `deepClone`;
- `flatten`;
- `groupBy`;
- `chunk`;
- `unique`;
- `compose`;
- `pipe`.

### Perguntas de entrevista

- Como funciona `debounce`?
- Como funciona `throttle`?
- O que é closure?
- Como preservar `this`?
- Como clonar objetos aninhados?

---

# Nível 4 — DOM e interatividade

## Projeto 4.1 — Calculadora visual

### Conceitos treinados

- DOM;
- eventos;
- estado;
- renderização;
- separação de lógica e UI.

### Requisitos

- botões clicáveis;
- teclado funcionando;
- visor;
- histórico;
- divisão por zero;
- lógica separada da UI.

### Perguntas de entrevista

- Como separar lógica de UI?
- Como evitar listeners duplicados?
- Como lidar com teclado?
- Como testar sem navegador?

---

## Projeto 4.2 — To-do list com arquitetura

### Conceitos treinados

- estado em array;
- renderização;
- eventos;
- localStorage;
- event delegation.

### Requisitos

- adicionar;
- concluir;
- remover;
- editar;
- filtrar;
- persistir;
- limpar concluídas.

### Perguntas de entrevista

- O que é event delegation?
- Como evitar memory leaks?
- Por que separar `state` de `render`?
- Como sincronizar com localStorage?

---

## Projeto 4.3 — Quiz interativo

### Conceitos treinados

- renderização condicional;
- estado de etapas;
- arrays de objetos;
- eventos.

### Requisitos

- perguntas em array;
- uma pergunta por vez;
- pontuação;
- feedback;
- tela final;
- reiniciar;
- melhor resultado salvo.

### Perguntas de entrevista

- Como modelar etapas?
- Como evitar duplicação?
- Como tornar extensível?
- Como separar dados, lógica e UI?

---

## Projeto 4.4 — Componentes vanilla

### Conceitos treinados

- DOM APIs;
- acessibilidade;
- teclado;
- ARIA;
- reutilização.

### O que construir

- tabs;
- accordion;
- modal;
- dropdown;
- tooltip.

### Requisitos

- teclado;
- estados visuais;
- ARIA;
- ESC;
- controle de foco.

### Perguntas de entrevista

- Como fazer modal acessível?
- Como gerenciar foco?
- Quando usar `aria-expanded`?
- Como criar componente sem framework?

---

# Nível 5 — Assíncrono e APIs

## Projeto 5.1 — Buscador de CEP/clima

### Conceitos treinados

- `fetch`;
- Promise;
- `async/await`;
- `try/catch`;
- loading;
- error state;
- JSON.

### Requisitos

- loading;
- erro;
- estado vazio;
- retry;
- validação;
- `AbortController`.

### Perguntas de entrevista

- O que é uma Promise?
- Como `async/await` funciona?
- Como cancelar requisição?
- Como evitar race condition?

---

## Projeto 5.2 — Galeria com API

### Conceitos treinados

- listas;
- paginação;
- filtros;
- múltiplas requisições;
- performance.

### Requisitos

- loading skeleton;
- paginação ou infinite scroll;
- filtro local;
- busca remota;
- cache simples;
- erro.

### Perguntas de entrevista

- Como lidar com listas grandes?
- Como cachear dados?
- Como evitar chamadas repetidas?
- Como controlar loading por página?

---

## Projeto 5.3 — Busca com debounce

### Conceitos treinados

- input events;
- debounce;
- closures;
- cancelamento;
- UX.

### Requisitos

- debounce próprio;
- loading;
- cancelar requisição anterior;
- mensagem sem resultados;
- proteger contra resposta antiga.

### Perguntas de entrevista

- Diferença entre debounce e throttle?
- Como debounce usa closure?
- Como evitar race condition?
- Como implementar do zero?

---

# Nível 6 — JavaScript avançado

## Projeto 6.1 — Classes e POO

### Conceitos treinados

- `class`;
- `constructor`;
- métodos;
- `this`;
- prototype;
- composição.

### O que construir

Refatore agenda ou carrinho usando:

- `Contato`;
- `Agenda`;
- `Produto`;
- `Carrinho`;
- `Cupom`.

### Perguntas de entrevista

- Como funciona `this`?
- Classe é o quê em JavaScript?
- Diferença entre classe e prototype?
- Quando POO ajuda?

---

## Projeto 6.2 — Módulos e organização

### Conceitos treinados

- `import`;
- `export`;
- responsabilidades;
- arquitetura simples.

### Estrutura sugerida

```txt
src/
  main.js
  state.js
  render.js
  events.js
  api.js
  storage.js
  utils/
```

### Perguntas de entrevista

- Como dividir responsabilidades?
- O que fica em `utils`?
- Como evitar dependência circular?
- Como facilitar testes?

---

## Projeto 6.3 — Store simples

### Conceitos treinados

- closures;
- observer pattern;
- pub/sub;
- estado imutável.

### O que construir

Uma store com:

- `getState`;
- `setState`;
- `subscribe`;
- `unsubscribe`;
- `reset`;
- histórico simples.

### Perguntas de entrevista

- O que é closure?
- Como funciona observer?
- Como evitar mutação?
- Como isso lembra Redux/Zustand?

---

## Projeto 6.4 — Mini framework de componentes

### Conceitos treinados

- composição;
- renderização;
- estado;
- eventos;
- arquitetura de UI.

### O que construir

Um mini sistema para criar componentes em vanilla JS.

Objetivo: entender por que frameworks como React existem.

### Perguntas de entrevista

- Qual problema um framework resolve?
- O que é re-render?
- Como evitar renderizar tudo?
- Como conectar estado e evento?

---

# Projeto final — JavaScript Front-End Engineering Lab

## Objetivo

Criar um repositório público que prove domínio real de JavaScript.

## Estrutura

```txt
javascript-frontend-engineering-lab/
  algorithms/
  utils/
  dom-components/
  async/
  state/
  mini-framework/
  tests/
  README.md
```

## Critérios de pronto

- código limpo;
- funções testáveis;
- exemplos de uso;
- edge cases;
- complexidade explicada;
- README em inglês;
- commits organizados.

## Descrição do GitHub

```txt
A JavaScript engineering lab focused on algorithms, DOM APIs, async patterns, state management and reusable UI primitives for front-end interviews.
```

---

## Checklist final

- [ ] scope
- [ ] closure
- [ ] hoisting
- [ ] `this`
- [ ] prototype
- [ ] classes
- [ ] modules
- [ ] promises
- [ ] async/await
- [ ] event loop
- [ ] microtasks/macrotasks
- [ ] DOM APIs
- [ ] event delegation
- [ ] debounce
- [ ] throttle
- [ ] memoization
- [ ] deep clone
- [ ] currying
- [ ] map/filter/reduce
- [ ] fetch
- [ ] AbortController
- [ ] localStorage
- [ ] observer pattern
- [ ] Big O básico
