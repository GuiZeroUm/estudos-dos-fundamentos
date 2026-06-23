# React Avançado

> Objetivo: dominar React como ferramenta de arquitetura de UI, não apenas como biblioteca para montar telas.

---

## 1. Tópicos obrigatórios

- component composition;
- props;
- children;
- controlled components;
- uncontrolled components;
- state lifting;
- Context API;
- reducers;
- hooks;
- custom hooks;
- refs;
- effects;
- memo;
- `useMemo`;
- `useCallback`;
- error boundaries;
- renderização condicional;
- listas e keys;
- formulários complexos;
- component API design;
- performance.

---

## 2. Projeto 1 — Componentes compostos

Crie componentes como:

- Tabs;
- Accordion;
- Dropdown;
- Modal.

Exemplo desejado:

```jsx
<Tabs defaultValue="overview">
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="details">Details</Tabs.Trigger>
  </Tabs.List>

  <Tabs.Content value="overview">...</Tabs.Content>
  <Tabs.Content value="details">...</Tabs.Content>
</Tabs>
```

### Perguntas

- Por que composition é melhor que muitas props?
- Como compartilhar estado entre subcomponentes?
- Quando usar Context?

---

## 3. Projeto 2 — Formulário complexo

Crie um formulário com:

- validação;
- erros;
- campos controlados;
- campos não controlados;
- submit;
- loading;
- reset;
- foco no primeiro erro.

### Perguntas

- Diferença entre controlled e uncontrolled?
- Como evitar re-render em formulário grande?
- Como tratar validação assíncrona?

---

## 4. Projeto 3 — Performance em React

Crie uma tela com lista grande e depois otimize.

Estude:

- renderizações desnecessárias;
- `React.memo`;
- `useMemo`;
- `useCallback`;
- virtualização;
- splitting de componentes;
- profiling.

### Perguntas

- Quando memoização ajuda?
- Quando atrapalha?
- Como identificar gargalo?
- Como otimizar lista grande?

---

## 5. Projeto 4 — Migração vanilla para React

Pegue um componente vanilla JS e migre por fases:

1. preservar HTML/CSS;
2. extrair componente;
3. controlar estado;
4. adicionar testes;
5. documentar trade-offs.

### Perguntas

- Como migrar sem reescrever tudo?
- Como reduzir risco?
- Como manter compatibilidade?
- Como validar comportamento?

---

## 6. Checklist

- [ ] desenho API de componente;
- [ ] uso composition;
- [ ] explico controlled/uncontrolled;
- [ ] crio custom hooks;
- [ ] uso Context com critério;
- [ ] otimizo renders;
- [ ] explico keys;
- [ ] trato formulários complexos;
- [ ] migro vanilla para React;
- [ ] explico trade-offs.
