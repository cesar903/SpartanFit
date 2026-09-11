# Spartan Fit

Site institucional da academia Spartan Fit, criado com Next.js, TypeScript e Tailwind CSS.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build de producao

```bash
npm run build
```

## Deploy no Netlify

As configuracoes principais ja estao em `netlify.toml`.

- Build command: `npm run build`
- Publish directory: `.next`
- Node version: `20`
- Next.js runtime: `@netlify/plugin-nextjs`

No Netlify, conecte o repositorio, confirme esses campos e faca o deploy. Nao ha variaveis de ambiente obrigatorias para esta versao.
