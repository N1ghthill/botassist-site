# BotAssist Site

[![Licença: MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-success)](LICENSE)
[![Issues](https://img.shields.io/github/issues/N1ghthill/botassist-site)](https://github.com/N1ghthill/botassist-site/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/N1ghthill/botassist-site)](https://github.com/N1ghthill/botassist-site/pulls)
[![GitHub Sponsors](https://img.shields.io/badge/donate-GitHub%20Sponsors-black)](https://github.com/sponsors/N1ghthill)

Este repositório contém o **site** (landing page) do **BotAssist WhatsApp** — **não** o aplicativo/bot em si.

**Vitrine de produto para aquisição e distribuição do BotAssist.**

Do MVP ao scale: a landing nasceu para validar interesse e evoluiu para canal contínuo de aquisição, suporte e distribuição.

Contexto de pagamentos: este repositório não implementa billing diretamente, mas comunica produtos que operam com checkout e integrações de pagamentos.

## Case Summary
- Problema: necessidade de centralizar narrativa de produto, downloads e documentação pública.
- Solução: site oficial integrado ao fluxo de releases do app desktop.
- Impacto esperado: menor fricção entre descoberta do produto e instalação.

## Skills / Keywords (SEO)
`SaaS`, `automation`, `open-source`, `API`, `Node.js`, `TypeScript`, `Next.js`, `product marketing`, `developer relations`

## Disponibilidade
Disponível para estruturar landing pages técnicas com foco em conversão para produtos B2B/B2C.

Links rápidos:

- 🌐 Site: `https://botassist.ruas.dev.br`
- 🖥️ App (desktop): `https://github.com/N1ghthill/botassist-whatsapp`
- 🐛 Issues (site): `https://github.com/N1ghthill/botassist-site/issues`
- 🤝 Contribuir: `CONTRIBUTING.md`
- ☕ Doar: `https://github.com/sponsors/N1ghthill`

![Preview do site](public/screenshots/dashboard.png)

## 🧭 Índice

- [✨ O que este site faz](#o-que-este-site-faz)
- [🌱 Filosofia](#filosofia)
- [✅ Requisitos](#requisitos)
- [🧱 Estrutura do projeto](#estrutura-do-projeto)
- [🛠️ Desenvolvimento local](#desenvolvimento-local)
- [🧪 Build](#build)
- [🚀 Deploy no Vercel](#deploy-no-vercel)
- [📦 Releases e downloads](#releases-e-downloads)
- [📰 Atualização 4.2.2](#atualizacao-422)
- [🤝 Contribuindo](#contribuindo)
- [☕ Apoie (doação opcional)](#apoie-doacao-opcional)
- [📜 Licença](#licenca)
- [🛡️ Segurança](#seguranca)
- [🛰️ Telemetria / rastreamento](#telemetria--rastreamento)

<a id="o-que-este-site-faz"></a>
## ✨ O que este site faz

- Landing page do BotAssist (benefícios, FAQ e screenshots)
- Seção de **Downloads** integrada ao GitHub Releases do app
  - Resolve automaticamente o instalador/asset da **última release** (quando disponível)

<a id="filosofia"></a>
## 🌱 Filosofia

O intuito deste projeto é **colaborar com o desenvolvimento de software livre**, **gratuito** e de **qualidade**.

Se você quiser contribuir, fique à vontade — eu faço a minha humilde parte e toda ajuda é bem-vinda.

<a id="requisitos"></a>
## ✅ Requisitos

- Node.js **18+**

<a id="estrutura-do-projeto"></a>
## 🧱 Estrutura do projeto

- `src/pages`: páginas e rotas (inclui `/api/latest-download`)
- `src/components`: seções da landing page
- `public/screenshots`: imagens usadas no site/README
  - `public/screenshots/old`: capturas antigas preservadas como referência
- `public/icon.png`, `public/botassist_logo.png`, `public/ruas_logo.png`: identidade visual do BotAssist

<a id="desenvolvimento-local"></a>
## 🛠️ Desenvolvimento local

```bash
npm ci
npm run dev
```

<a id="build"></a>
## 🧪 Build

```bash
npm run lint
npm run build
```

<a id="deploy-no-vercel"></a>
## 🚀 Deploy no Vercel

### 🌐 Domínio

- URL esperada: `https://botassist.ruas.dev.br`
- No Vercel: **Settings → Domains** e aponte o DNS do subdomínio para o Vercel.

### 🔐 Variáveis de ambiente

- `NEXT_PUBLIC_SITE_URL` (ex.: `https://botassist.ruas.dev.br`)
- `NEXT_PUBLIC_PIX_KEY` (opcional — exibe botão de Pix no "cafezinho")
- `NEXT_PUBLIC_PIX_LABEL` (opcional — texto exibido no modal de Pix)

<a id="releases-e-downloads"></a>
## 📦 Releases e downloads

O site busca os arquivos da **última release** do repositório do app (`botassist-whatsapp`) usando os manifests gerados pelo `electron-builder`:

- Windows: `latest.yml`
- macOS: `latest-mac.yml`
- Linux: `latest-linux.yml`

Quando você cria e publica uma release no `botassist-whatsapp`, os botões de download passam a apontar automaticamente para os assets da release.
Se algum manifest não estiver disponível, o botão cai para a página de releases.

Atualmente, a landing esta alinhada com a linha estavel **4.2.2** do app desktop.

<a id="atualizacao-422"></a>
## 📰 Atualização 4.2.2

Data: **2026-03-21**

Resumo do anúncio para o site:
- Renderer endurecido com protocolo `app://botassist/*`.
- `shell.exec` mais restrito, sem shell composto, pipes ou redirecionamento.
- Smoke test do binario empacotado cobrindo onboarding, owner por token, tools e update.
- Pipeline de release mais profissional, com distribuicao estavel para Windows, macOS e Linux.
- Site atualizado para refletir a linha estavel atual do BotAssist.

Referência editorial:
- `RELEASE_NOTES.md`

## 🧭 Contato / Problemas

- Problemas/ideias do **site**: abra uma issue neste repositório (`botassist-site`)
- Problemas do **app**: `https://github.com/N1ghthill/botassist-whatsapp/issues`
- E-mail (assuntos sensíveis): `irving@ruas.dev.br`

<a id="contribuindo"></a>
## 🤝 Contribuindo

Contribuições são muito bem-vindas.

- Para contribuir com o **site**: issues e PRs neste repositório
- Para contribuir com o **app**: use o repositório do app (`botassist-whatsapp`)

Guia rápido: `CONTRIBUTING.md`.

<a id="apoie-doacao-opcional"></a>
## ☕ Apoie (doação opcional)

- GitHub Sponsors: `https://github.com/sponsors/N1ghthill`
- Pix (opcional no site): defina `NEXT_PUBLIC_PIX_KEY` e, se quiser, `NEXT_PUBLIC_PIX_LABEL` no Vercel

<a id="licenca"></a>
## 📜 Licença

Este repositório (**botassist-site**) é **software livre** e está licenciado sob a **MIT License**.

- Você pode usar, modificar e redistribuir (inclusive comercialmente), desde que mantenha o aviso de copyright e a licença.
- **Sem garantias**: você usa por sua conta e risco (o texto completo está em `LICENSE`).

Veja: `LICENSE`.

<a id="seguranca"></a>
## 🛡️ Segurança

Se você encontrar algum problema de segurança, por favor veja `SECURITY.md`.

<a id="telemetria--rastreamento"></a>
## 🛰️ Telemetria / rastreamento

Este site não inclui SDKs de analytics, pixels de rastreamento ou telemetria do aplicativo.

- O que pode existir são **logs técnicos do provedor** (ex.: IP/user-agent/data-hora) para segurança e operação normal do serviço.
