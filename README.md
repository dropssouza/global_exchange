# Global Exchange 🌍

Este projeto é uma evolução do meu primeiro conversor de moedas, desenvolvido inicialmente com HTML, CSS e JavaScript puro, utilizando um backend em Python.

Nesta versão, todo o frontend e a lógica de requisição foram implementados com React, resultando em uma aplicação mais moderna, elegante e performática.

O usuário seleciona a moeda de origem, a moeda de destino e informa o valor desejado. O sistema retorna o valor convertido em tempo real utilizando a AwesomeAPI.

Acesse o site aqui: https://global-exchange.netlify.app/ \
 O repositório do meu conversor de moedas em JS puro: https://github.com/dropssouza/currency_conversion

## Tecnologias Utilizadas

- React + Vite (frontend)
- Netlify (hospedagem do frontend)
- API REST pública para cotações (AwesomeAPI)

## Como Funciona

1. O usuário informa:
   - Moeda de origem
   - Moeda de destino
   - Valor a ser convertido

2. O frontend (React) realiza uma requisição direta para a AwesomeAPI, sem a necessidade de um servidor backend intermediário.

3. A aplicação processa os dados retornados (JSON), extrai a cotação atual e calcula o valor convertido.

4. O resultado é exibido imediatamente ao usuário.

## Futuras Melhorias

- Histórico de conversões
- Suporte a moedas favoritas
- Modo escuro (dark mode)
- Validação mais completa de entrada do usuário
- Notícias e atualizações sobre economia

## Como Rodar o Projeto

```bash
npm install
npm run dev
```
