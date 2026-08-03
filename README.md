# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Configuração do convite

Copie `.env.example` para `.env.local` e preencha apenas os valores disponíveis:

```env
VITE_RSVP_ENDPOINT=https://script.google.com/macros/s/SEU_DEPLOYMENT_ID/exec
VITE_GIFT_LIST_URL=https://...
```

Não coloque credenciais, chaves privadas ou dados bancários secretos no frontend.

### Google Sheets e RSVP

1. Crie uma planilha e uma folha chamada `RSVP`.
2. Na primeira linha, crie as colunas: Data e hora, Nome completo, Telefone, Confirmação, Número de acompanhantes, Nomes dos acompanhantes e Mensagem.
3. Em Extensões > Apps Script, copie `docs/google-apps-script.js` e substitua `SPREADSHEET_ID` pelo ID da planilha.
4. Em Implementar > Nova implementação, escolha Aplicação Web, execute como proprietário e defina quem pode aceder conforme o público do convite.
5. Autorize o script, copie o URL terminado em `/exec` e coloque-o em `VITE_RSVP_ENDPOINT`.
6. Faça uma submissão de teste e confirme a nova linha na planilha. Quando alterar o script, crie uma nova versão da implementação.

Os dados bancários permanecem como placeholders em `src/components/TransferModal.jsx` até serem fornecidos pelos noivos. O link da lista de presentes é configurado uma única vez por `VITE_GIFT_LIST_URL`.
