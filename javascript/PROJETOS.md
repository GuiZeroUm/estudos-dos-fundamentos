# Roteiro de Projetos para Dominar JavaScript

Sequência de projetos com dificuldade crescente. A ideia é que cada um force você a aprender um conjunto novo de conceitos sem deixar lacunas. Você já fez uma **calculadora com `switch`**, então começamos logo depois disso.

> **Como usar este roteiro:** faça um projeto por vez, na ordem. Só avance quando o atual estiver funcionando *e* você conseguir explicar com suas palavras o que cada parte do código faz. Não copie soluções prontas — trave, pesquise pontos específicos, resolva.

---

## Nível 1 — Fundamentos (lógica, tipos, condicionais, laços)

### Projeto 1.1 — Conversor de unidades
**Pratica:** funções, parâmetros, retorno, operadores aritméticos, `Number()`/`parseFloat`.

**O que entregar:** um conjunto de funções que convertem entre unidades (Celsius↔Fahrenheit, km↔milhas, kg↔libras). Cada conversão é uma função separada.

**Exemplo de input/output:**
```js
celsiusParaFahrenheit(25);  // 77
kmParaMilhas(10);           // 6.21
```

---

### Projeto 1.2 — FizzBuzz com variações
**Pratica:** laço `for`, operador de módulo `%`, encadeamento de `if/else`.

**O que entregar:** imprima de 1 a N. Múltiplos de 3 → "Fizz", de 5 → "Buzz", de ambos → "FizzBuzz". Depois adicione uma regra própria (ex.: múltiplos de 7 → "Bang").

**Exemplo:**
```
input: 15
output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
```

---

### Projeto 1.3 — Verificador de senha forte
**Pratica:** strings, condicionais combinadas (`&&`, `||`), booleanos, retorno de mensagem.

**O que entregar:** uma função que recebe uma senha e retorna se ela é válida segundo regras: mínimo 8 caracteres, pelo menos 1 número, 1 letra maiúscula e 1 símbolo. Retorne *quais* regras falharam.

**Exemplo:**
```js
validarSenha("abc123");
// { valida: false, problemas: ["mínimo 8 caracteres", "falta maiúscula", "falta símbolo"] }
```

---

## Nível 2 — Arrays, strings e objetos

### Projeto 2.1 — Estatísticas de uma lista de números
**Pratica:** arrays, `for`/`reduce`, `Math.max/min`, ordenação.

**O que entregar:** função(ões) que calculam soma, média, maior, menor e mediana de um array.

**Exemplo:**
```js
estatisticas([4, 8, 15, 16, 23, 42]);
// { soma: 108, media: 18, maior: 42, menor: 4, mediana: 15.5 }
```

---

### Projeto 2.2 — Analisador de texto
**Pratica:** métodos de string (`split`, `toLowerCase`, `replace`), iteração.

**O que entregar:** dado um texto, retorne: número de palavras, número de caracteres (com e sem espaços), e a palavra mais frequente.

**Exemplo:**
```js
analisar("o rato roeu a roupa do rei de roma o rato fugiu");
// { palavras: 12, caracteres: 47, maisFrequente: "o" }
```

---

### Projeto 2.3 — Agenda de contatos (em memória)
**Pratica:** objetos, array de objetos, CRUD (criar, listar, buscar, atualizar, remover).

**O que entregar:** funções `adicionar`, `buscarPorNome`, `atualizar`, `remover` operando sobre um array de objetos `{ nome, telefone, email }`.

**Exemplo:**
```js
adicionar({ nome: "Ana", telefone: "9999", email: "ana@x.com" });
buscarPorNome("Ana");
// { nome: "Ana", telefone: "9999", email: "ana@x.com" }
```

---

### Projeto 2.4 — Carrinho de compras
**Pratica:** `map`, `filter`, `reduce`, manipulação de array de objetos.

**O que entregar:** dado um carrinho `[{ produto, preco, quantidade }]`, calcule o total, aplique um cupom de desconto percentual e liste apenas itens acima de um valor.

**Exemplo:**
```js
const carrinho = [
  { produto: "café", preco: 20, quantidade: 2 },
  { produto: "pão",  preco: 5,  quantidade: 4 }
];
totalComDesconto(carrinho, 10); // total 60 - 10% = 54
```

---

## Nível 3 — Algoritmos e resolução de problemas

### Projeto 3.1 — Palíndromo e anagrama
**Pratica:** normalização de strings, comparação, ordenação de caracteres.

**O que entregar:** `ehPalindromo(texto)` e `saoAnagramas(a, b)`, ignorando espaços e acentos.

**Exemplo:**
```js
ehPalindromo("A man a plan a canal Panama"); // true
saoAnagramas("amor", "roma");                // true
```

---

### Projeto 3.2 — Mini biblioteca de algoritmos
**Pratica:** recursão, complexidade, lógica iterativa.

**O que entregar:** implemente do zero: fatorial (recursivo e iterativo), Fibonacci, e uma ordenação simples (bubble sort ou selection sort). Compare os resultados.

**Exemplo:**
```js
fibonacci(7);   // 13
bubbleSort([5,2,9,1]); // [1,2,5,9]
```

---

### Projeto 3.3 — Jogo de adivinhação (terminal/lógica)
**Pratica:** estado, laço `while`, geração aleatória, controle de fluxo.

**O que entregar:** o programa "pensa" em um número de 1 a 100; o jogador chuta e recebe "maior"/"menor" até acertar, contando tentativas. (Por enquanto pode simular os chutes com um array.)

**Exemplo:**
```
secreto: 42
chutes: 50 (menor), 25 (maior), 37 (maior), 42 (acertou em 4 tentativas)
```

---

## Nível 4 — DOM e interatividade no navegador

> A partir daqui você usa HTML + CSS + JS juntos. Cada projeto deve abrir num `index.html`.

### Projeto 4.1 — Sua calculadora, agora visual
**Pratica:** seleção de elementos (`querySelector`), eventos (`addEventListener`), atualização do DOM.

**O que entregar:** transforme a calculadora do `switch` em uma com botões clicáveis e um visor que atualiza na tela.

---

### Projeto 4.2 — Lista de tarefas (To-Do)
**Pratica:** criar/remover elementos do DOM, eventos, estado em array, marcar como concluído.

**O que entregar:** input para adicionar tarefa, lista exibida na tela, botão para concluir e para remover cada item.

**Exemplo de fluxo:**
```
digita "estudar JS" → Enter → aparece na lista com checkbox e botão remover
```

---

### Projeto 4.3 — Quiz interativo
**Pratica:** array de objetos como fonte de dados, renderização dinâmica, pontuação, controle de etapas.

**O que entregar:** lê perguntas de um array, mostra uma por vez, registra acertos e exibe o resultado final.

**Exemplo de dado:**
```js
const perguntas = [
  { pergunta: "Qual o resultado de typeof []?", opcoes: ["array","object","list"], correta: 1 }
];
```

---

### Projeto 4.4 — Conversor/temporizador com persistência
**Pratica:** `localStorage`, eventos de tempo (`setInterval`), formatação.

**O que entregar:** um cronômetro ou um app de notas que salva os dados no navegador e os recupera ao recarregar a página.

---

## Nível 5 — Assíncrono e consumo de APIs

### Projeto 5.1 — Buscador de clima ou de CEP
**Pratica:** `fetch`, `async/await`, Promises, tratamento de erro com `try/catch`, JSON.

**O que entregar:** input onde o usuário digita uma cidade (ou CEP) e o app busca os dados numa API pública e exibe na tela.

**Exemplo (API ViaCEP):**
```js
const r = await fetch("https://viacep.com.br/ws/01001000/json/");
const dados = await r.json();
// { logradouro: "Praça da Sé", localidade: "São Paulo", uf: "SP", ... }
```

---

### Projeto 5.2 — Galeria/lista a partir de uma API
**Pratica:** múltiplas requisições, `map` para renderizar, estados de carregando/erro.

**O que entregar:** consuma uma API de lista (ex.: Pokémon, filmes, posts de teste) e renderize os itens em cards. Adicione um campo de busca/filtro.

**Exemplo de API:** `https://pokeapi.co/api/v2/pokemon?limit=20`

---

### Projeto 5.3 — App de busca com debounce
**Pratica:** eventos de input, `setTimeout`/debounce, evitar requisições demais.

**O que entregar:** uma busca que só dispara a requisição ~400ms após o usuário parar de digitar.

---

## Nível 6 — JavaScript avançado

### Projeto 6.1 — Refatore para Programação Orientada a Objetos
**Pratica:** `class`, `constructor`, métodos, `this`, herança.

**O que entregar:** reescreva a agenda de contatos (2.3) ou o carrinho (2.4) usando classes (ex.: `Contato`, `Agenda`).

**Exemplo:**
```js
const agenda = new Agenda();
agenda.adicionar(new Contato("Ana", "9999"));
agenda.buscar("Ana");
```

---

### Projeto 6.2 — Módulos e organização de projeto
**Pratica:** `import`/`export`, separação de responsabilidades, estrutura de pastas.

**O que entregar:** pegue um projeto anterior e divida em módulos (ex.: `ui.js`, `api.js`, `state.js`, `main.js`).

---

### Projeto 6.3 — Gerenciador de estado simples
**Pratica:** closures, funções de ordem superior, padrão observer/pub-sub.

**O que entregar:** uma pequena "store" com `getState`, `setState` e `subscribe`, onde mudanças notificam a interface automaticamente.

**Exemplo:**
```js
const store = criarStore({ contador: 0 });
store.subscribe(estado => render(estado));
store.setState({ contador: 1 }); // dispara o render
```

---

### Projeto 6.4 — Projeto final integrador
**Pratica:** tudo junto.

**O que entregar:** um app completo combinando API + estado + DOM modularizado + persistência. Sugestões: um app de finanças pessoais, um agregador de notícias, um Kanban, ou um gerenciador de hábitos.

**Critérios de "pronto":**
- separado em módulos
- consome uma API real
- mantém estado de forma organizada
- persiste dados (localStorage)
- trata erros e estados de carregamento

---

## Conceitos que você terá coberto ao final

| Área | Onde aparece |
|---|---|
| Tipos, operadores, condicionais | Nível 1 |
| Laços e recursão | Níveis 1 e 3 |
| Funções e escopo | Todos |
| Arrays (`map`, `filter`, `reduce`) | Níveis 2 e 5 |
| Objetos e CRUD | Nível 2 |
| Algoritmos e complexidade | Nível 3 |
| DOM e eventos | Nível 4 |
| Assíncrono, Promises, `fetch` | Nível 5 |
| Classes / POO | Nível 6 |
| Módulos e arquitetura | Nível 6 |
| Closures e padrões | Nível 6 |

---

## Dicas de método

1. **Escreva o que vai fazer antes de codar.** Em comentários, descreva os passos. Isso é metade da resolução.
2. **Teste cada função isoladamente** antes de integrar.
3. **Quando travar**, pesquise o conceito específico (ex.: "como usar reduce"), não a solução do projeto inteiro.
4. **Refatore depois de funcionar.** Faça funcionar feio primeiro, depois melhore.
5. **Versione com Git** desde o Nível 2 — cada projeto num commit/repositório.