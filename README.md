# BotAssist Site

Site oficial para divulgar e disponibilizar o **BotAssist WhatsApp** (aplicativo desktop gratuito) para **Windows, macOS e Linux**.

Repositório do app: `https://github.com/N1ghthill/botassist-whatsapp`

## O que este site faz

- Landing page do BotAssist (benefícios, FAQ e screenshots)
- Seção de **Downloads** integrada ao GitHub Releases do app
  - Resolve automaticamente o instalador/asset da **última release** (quando disponível)

## Requisitos

- Node.js **18+**

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Build

```bash
npm run lint
npm run build
```

## Deploy no Vercel

### Domínio

- URL esperada: `https://botassist.ruas.dev.br`
- No Vercel: **Settings → Domains** e aponte o DNS do subdomínio para o Vercel.

### Variáveis de ambiente

- `NEXT_PUBLIC_SITE_URL` (ex.: `https://botassist.ruas.dev.br`)
- `NEXT_PUBLIC_PIX_KEY` (opcional — exibe botão de Pix no "cafezinho")
- `NEXT_PUBLIC_PIX_LABEL` (opcional — texto exibido no modal de Pix)

## Releases e downloads

O site busca os arquivos da **última release** do repositório do app (`botassist-whatsapp`) usando os manifests gerados pelo `electron-builder`:

- Windows: `latest.yml`
- macOS: `latest-mac.yml`
- Linux: `latest-linux.yml`

Quando você cria e publica uma release no `botassist-whatsapp`, os botões de download passam a apontar automaticamente para os assets da release.

## Contato / Problemas

- Preferencial: abra uma issue em `https://github.com/N1ghthill/botassist-whatsapp/issues`
- E-mail (assuntos sensíveis): `irving@ruas.dev.br`

## Apoie (cafezinho)

- GitHub Sponsors: `https://github.com/sponsors/N1ghthill`
- Pix (opcional no site): defina `NEXT_PUBLIC_PIX_KEY` e, se quiser, `NEXT_PUBLIC_PIX_LABEL` no Vercel
