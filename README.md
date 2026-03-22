# BotAssist Site

[![Licença: MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-success)](LICENSE)
[![Issues](https://img.shields.io/github/issues/N1ghthill/botassist-site)](https://github.com/N1ghthill/botassist-site/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/N1ghthill/botassist-site)](https://github.com/N1ghthill/botassist-site/pulls)
[![GitHub Sponsors](https://img.shields.io/badge/donate-GitHub%20Sponsors-black)](https://github.com/sponsors/N1ghthill)

Site oficial do BotAssist.

Este repositório contém a landing page pública do projeto, com posicionamento do produto, screenshots, FAQ e botões de download ligados às releases do app desktop.

O BotAssist é gratuito e open-source. Este repo não é uma demo nem uma vitrine de portfólio: ele é a superfície pública do projeto para apresentação, documentação inicial e distribuição das builds.

Links rápidos:

- Site: `https://botassist.ruas.dev.br`
- App desktop: `https://github.com/N1ghthill/botassist-whatsapp`
- Releases do app: `https://github.com/N1ghthill/botassist-whatsapp/releases`
- Issues do site: `https://github.com/N1ghthill/botassist-site/issues`
- Doação opcional: `https://github.com/sponsors/N1ghthill`

![Preview do site](public/screenshots/dashboard.png)

## O que este repo faz

- apresenta o BotAssist de forma pública e objetiva
- centraliza screenshots, FAQ e links principais
- resolve automaticamente os assets da release estável do app
- serve como ponto de entrada para novos usuários e contribuidores

## O que ele não é

- não contém o app Electron nem o bot em si
- não executa automação de WhatsApp
- não implementa billing, checkout ou backend do produto

## Como os downloads funcionam

O site consulta os manifests publicados pelo `electron-builder` no repositório do app:

- Windows: `latest.yml`
- macOS: `latest-mac.yml`
- Linux: `latest-linux.yml`

Quando existe asset direto para a plataforma, o botão aponta para ele. Quando não existe, o fallback é a página de releases do BotAssist.

Hoje a landing está alinhada com a linha estável `v4.2.2` do app desktop.

## Stack

- Next.js
- React
- Tailwind CSS
- Lucide Icons

## Estrutura

- `src/pages`: páginas e rota `/api/latest-download`
- `src/components`: seções da landing page
- `src/lib`: metadata editorial usada pelo site
- `public/screenshots`: imagens do produto usadas no site e no README

## Requisitos

- Node.js `18.18+`
- npm

## Desenvolvimento local

Instalação:

```bash
npm ci
```

Execução:

```bash
npm run dev
```

Validação:

```bash
npm run lint
npm run build
```

## Variáveis de ambiente

- `NEXT_PUBLIC_SITE_URL`
  Exemplo: `https://botassist.ruas.dev.br`
- `NEXT_PUBLIC_PIX_KEY`
  Opcional. Exibe o botão de Pix no bloco de apoio ao projeto.
- `NEXT_PUBLIC_PIX_LABEL`
  Opcional. Personaliza o texto exibido no modal de Pix.

## Deploy

O destino esperado é a Vercel, com domínio em:

- `https://botassist.ruas.dev.br`

No projeto da Vercel, configure o domínio e as variáveis de ambiente acima.

## Conteúdo e posicionamento

O objetivo deste site é comunicar o BotAssist como ele é hoje:

- app desktop gratuito
- open-source
- distribuído por releases reais
- com downloads para Windows, macOS e Linux

Se o app evoluir, a landing deve acompanhar a linha estável atual. Evite transformar este README em texto de portfólio, case comercial ou apresentação de “demo”.

## Contribuição

Contribuições são bem-vindas.

- problemas ou melhorias do site: abra issue ou PR neste repositório
- problemas do app: use `botassist-whatsapp`

Guia rápido: `CONTRIBUTING.md`

## Contato

- site: issues neste repositório
- app: `https://github.com/N1ghthill/botassist-whatsapp/issues`
- e-mail para temas sensíveis: `irving@ruas.dev.br`

## Apoio opcional

Se o BotAssist te ajuda e você quiser apoiar a manutenção:

- GitHub Sponsors: `https://github.com/sponsors/N1ghthill`
- Pix: configurável no site via variáveis de ambiente

## Licença

MIT. Veja `LICENSE`.

## Segurança

Se você encontrar um problema de segurança, consulte `SECURITY.md`.

## Telemetria

Este site não inclui analytics, pixels de rastreamento ou telemetria própria do aplicativo.
