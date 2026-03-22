# Release Notes (Site)

Registro editorial das novidades destacadas no site do BotAssist.

## 4.2.3 - 2026-03-22

### Resumo curto
Release estavel focada em reduzir acoplamento do runtime principal, endurecer a execucao de tools e fechar melhor os contratos entre camadas sem mudar o comportamento esperado do produto em producao.

### Destaques para comunicacao
- Runtime principal mais modular, com menos concentracao de responsabilidade.
- Tools mais seguras, com validacao canonica de paths para bloquear escapes via symlink.
- Contratos compartilhados de IPC/eventos reduziram drift entre renderer, main e processo do bot.
- Fluxo de aprovacao manual de tools e comandos operacionais sairam do hot path principal.
- Release fechada com verificacao pos-publicacao dos feeds e assets reais.

### Mensagem pronta (versao curta)
BotAssist 4.2.3 esta no ar: runtime mais modular, tools mais seguras e distribuicao validada de ponta a ponta para Windows, macOS e Linux.

## 4.2.2 - 2026-03-21

### Resumo curto
Release estavel focada em confiabilidade operacional, endurecimento do renderer, shell.exec mais seguro e pipeline de distribuicao mais madura.

### Destaques para comunicacao
- Renderer migrado para `app://botassist/*` com hardening adicional no Electron.
- `shell.exec` agora valida comando-base e bloqueia shell composto, pipes e redirecionamento.
- Smoke do binario empacotado valida onboarding, owner por token, tools e fluxo de update.
- Releases e downloads estaveis publicados para Windows, macOS e Linux.
- Site revisado para refletir o estado atual do produto.

### Mensagem pronta (versao curta)
BotAssist 4.2.2 esta no ar: renderer endurecido, shell.exec mais seguro, pipeline de release mais madura e downloads estaveis para Windows, macOS e Linux.
