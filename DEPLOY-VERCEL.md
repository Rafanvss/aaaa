# 🚀 Deploy para Vercel

Este guia explica como fazer o deploy deste projeto na Vercel.

## ✅ Pré-requisitos

- Conta no GitHub
- Conta na Vercel

## 📦 Passo 1: Build do Projeto

Execute o comando de build com a configuração corrigida:

```bash
npx vite build --config vite.config.prod.ts && npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
```

Este comando irá:
- Compilar o frontend React para `dist/public`
- Compilar o backend Express para `dist/index.js`

## 📤 Passo 2: Exportar para GitHub

### Opção A: Usar o Git integrado do Replit

1. No Replit, adicione a ferramenta Git:
   - Clique em "Tools" no menu lateral
   - Adicione a ferramenta "Git"

2. Conecte com GitHub e faça push

### Opção B: Baixar e fazer upload manual

1. Baixe o projeto como ZIP
2. Crie um repositório no GitHub
3. Faça upload dos arquivos

## 🌐 Passo 3: Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório do GitHub
4. Configure o projeto:
   - **Framework Preset**: Vite
   - **Build Command**: `npx vite build --config vite.config.prod.ts && npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

5. Clique em "Deploy"

## ⚙️ Configurações Importantes

### Variáveis de Ambiente

Na Vercel, configure as seguintes variáveis (se necessário):
- `NODE_ENV=production`

### Arquivos Criados

- `vite.config.prod.ts` - Configuração de build corrigida
- `dist/public/` - Frontend compilado
- `dist/index.js` - Backend compilado

## 🔧 Alternativa: Deploy Direto no Replit

Se preferir, você pode fazer deploy direto no Replit clicando no botão "Deploy" no painel superior.

## 📝 Notas

- O projeto está configurado para servir frontend e backend na mesma porta
- Em produção, usa arquivos estáticos compilados
- A configuração está otimizada para Vercel

## ❓ Problemas Comuns

**Build falha com "Could not resolve entry module"**
- Use o comando de build com `--config vite.config.prod.ts`

**Página em branco após deploy**
- Verifique se o Output Directory está configurado como `dist/public`
- Confirme que o build foi executado corretamente

---

✨ **Dica**: Para testar localmente em modo produção, execute:
```bash
NODE_ENV=production node dist/index.js
```
