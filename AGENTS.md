# AGENTS

Diretrizes para agentes (Codex) neste repositório.

## Idioma e estilo

- Responder sempre em português.
- Comunicação direta, enxuta e orientada à execução.
- Priorizar clareza e objetividade no estilo inspirado no Caveman.

## Commits obrigatórios

Usar apenas estes prefixos:

- `CHORE: texto`
- `FIX: texto`
- `UPDATE: texto`

## Regras de implementação

- Manter o projeto rodando em `http://localhost:5175`.
- Não criar backend.
- Não implementar checkout real.
- Não gerar imagens novas para os planos.
- Usar as imagens existentes em `public/images/`.
- Não usar linguagem acadêmica/fictícia/demonstrativa na interface.
- Manter posicionamento de marca real, amigável e comercial.
- Garantir responsividade em desktop, tablet e mobile.
- Evitar overflow horizontal.

## Validação antes de concluir

Rodar sempre:

```bash
npm install
npm run build
npm run dev
```

## Deploy

- Preparar saída para Vercel com build em `dist`.
- Preservar compatibilidade com React + Vite.
