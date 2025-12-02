# 🌍 Global Exchange

Essa é uma atualização do meu primeiro projeto de conversão de moedas, que utiliza JavaScript puro. Neste aqui, utilizei o mesmo backend porém o frontend foi feito em React, resultando em um site mais moderno, elegante e responsivo.  
O usuário escolhe uma moeda de origem, uma moeda de destino e informa o valor desejado — o sistema retorna automaticamente o valor convertido.

Acesse o site aqui: https://global-exchange.netlify.app/ \
O repositório do meu conversor de moedas em JS puro: https://github.com/dropssouza/currency_conversion

OBS\* O site pode demorar um pouco para apresentar a primeira requisição por conta da inatividade no servidor do Render

---

## 🖥️ Tecnologias Utilizadas

- React + Vite (frontend)
- Python e FastAPI (backend)
- Netlify (hospedagem do frontend)
- Render (hospedagem do backend)
- API externa de câmbio (AwesomeAPI)

---

## 💡 Como Funciona

1. O usuário informa:

   - Moeda de origem
   - Moeda de destino
   - Valor a ser convertido

2. O frontend (React) envia uma requisição para o **backend em Python**, hospedado no Render.

3. O backend:

   - Recebe os dados enviados pelo componente _Coins_;
   - Solicita a taxa de conversão para a **AwesomeAPI**;
   - Processa os valores;
   - Retorna o valor convertido para o frontend.

4. O frontend exibe o resultado imediatamente.

---

## 📂 Estrutura do Projeto

src/ \
├── App.jsx \
├── components/ \
│ ├── Header/ \
│ ├── Main/ \
│ └── Coins/ \
└── main.jsx

---

## 🚀 Futuras Melhorias

- Histórico de conversões
- Suporte a moedas favoritas
- Modo escuro (dark mode)
- Animações e transições visuais mais suaves
- Validação mais completa de entrada do usuário

---

## ▶️ Como Rodar o Projeto

```bash
npm install
npm run dev
```
