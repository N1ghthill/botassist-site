# BotAssist Site

Este repositório contém o **site** (landing page) do **BotAssist WhatsApp** — **não** o aplicativo/bot em si.

- App (desktop): `https://github.com/N1ghthill/botassist-whatsapp`

## ✨ O que este site faz

- Landing page do BotAssist (benefícios, FAQ e screenshots)
- Seção de **Downloads** integrada ao GitHub Releases do app
  - Resolve automaticamente o instalador/asset da **última release** (quando disponível)

## 🌱 Filosofia

O intuito deste projeto é **colaborar com o desenvolvimento de software livre**, **gratuito** e de **qualidade**.

Se você quiser contribuir, fique à vontade — eu faço a minha humilde parte e toda ajuda é bem-vinda.

## ✅ Requisitos

- Node.js **18+**

## 🛠️ Desenvolvimento local

```bash
npm install
npm run dev
```

## 🧪 Build

```bash
npm run lint
npm run build
```

## 🚀 Deploy no Vercel

### 🌐 Domínio

- URL esperada: `https://botassist.ruas.dev.br`
- No Vercel: **Settings → Domains** e aponte o DNS do subdomínio para o Vercel.

### 🔐 Variáveis de ambiente

- `NEXT_PUBLIC_SITE_URL` (ex.: `https://botassist.ruas.dev.br`)
- `NEXT_PUBLIC_PIX_KEY` (opcional — exibe botão de Pix no "cafezinho")
- `NEXT_PUBLIC_PIX_LABEL` (opcional — texto exibido no modal de Pix)

## 📦 Releases e downloads

O site busca os arquivos da **última release** do repositório do app (`botassist-whatsapp`) usando os manifests gerados pelo `electron-builder`:

- Windows: `latest.yml`
- macOS: `latest-mac.yml`
- Linux: `latest-linux.yml`

Quando você cria e publica uma release no `botassist-whatsapp`, os botões de download passam a apontar automaticamente para os assets da release.

## 🧭 Contato / Problemas

- Problemas/ideias do **site**: abra uma issue neste repositório (`botassist-site`)
- Problemas do **app**: `https://github.com/N1ghthill/botassist-whatsapp/issues`
- E-mail (assuntos sensíveis): `irving@ruas.dev.br`

## 🤝 Contribuindo

Contribuições são muito bem-vindas.

- Para contribuir com o **site**: issues e PRs neste repositório
- Para contribuir com o **app**: use o repositório do app (`botassist-whatsapp`)

Guia rápido: `CONTRIBUTING.md`.

## ☕ Apoie (doação opcional)

- GitHub Sponsors: `https://github.com/sponsors/N1ghthill`
- Pix (opcional no site): defina `NEXT_PUBLIC_PIX_KEY` e, se quiser, `NEXT_PUBLIC_PIX_LABEL` no Vercel

## 📜 Licença

Este repositório (**botassist-site**) é **software livre** e está licenciado sob a **MIT License**.

- Você pode usar, modificar e redistribuir (inclusive comercialmente), desde que mantenha o aviso de copyright e a licença.
- **Sem garantias**: você usa por sua conta e risco (o texto completo está em `LICENSE`).

Veja: `LICENSE`.

## 🛰️ Telemetria / rastreamento

Este site não inclui SDKs de analytics, pixels de rastreamento ou telemetria do aplicativo.

- O que pode existir são **logs técnicos do provedor** (ex.: IP/user-agent/data-hora) para segurança e operação normal do serviço.
