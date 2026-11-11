# Vinnicius Maia — Portfólio Next.js

Primeira etapa da migração para **Next.js (App Router) + React**. Mantém o layout aprovado e os recursos já existentes, agora dentro de uma aplicação Next.js.

## Requisitos
- Node.js 20.9 ou superior
- VS Code

## Executar localmente
1. Extraia o ZIP e abra a pasta `vinnicius-maia-next` no VS Code.
2. Abra `Terminal > New Terminal`.
3. Rode os comandos:

```bash
npm install
npm run dev
```

4. Acesse http://localhost:3000

Para testar a compilação de produção:

```bash
npm run build
npm start
```

## Estrutura
- `app/layout.js`: metadados, idioma e estrutura global.
- `app/page.js`: página inicial.
- `app/globals.css`: identidade visual e responsividade.
- `components/SiteMarkup.js`: renderização da interface atual no React/Next.js.
- `components/SiteMarkup.js`: interações do menu, animações e formulário.
- `public/images/vinnicius.png`: fotografia recortada.

## Personalização
- WhatsApp: procure `5561974026852` no arquivo `components/SiteMarkup.js` (markup) e `public/vm-site.js` se necessário.
- Projetos e textos: `components/SiteMarkup.js`.
- Cores e layout: `app/globals.css`.

## Observações
- Os projetos são exibidos em `iframe`. Alguns provedores podem bloquear a incorporação por políticas de segurança; o link para abrir em nova aba continua disponível.
- O formulário faz validação no navegador e abre uma conversa pré-preenchida no WhatsApp. Ainda não armazena leads em banco de dados e não possui autenticação real.
- O painel administrativo e a integração com Supabase ficam para a próxima etapa, conforme combinado.
- Antes de publicar, configure o domínio definitivo nos metadados e na Vercel.

## Próxima etapa técnica
A interface foi preservada na migração inicial para reduzir risco de regressões visuais. O passo seguinte é decompor o markup em componentes React independentes e depois integrar Supabase para persistência segura de leads.
