export const releaseMeta = {
  version: '4.2.3',
  date: '2026-03-22',
  badge: 'Release estavel com runtime mais modular e tools endurecidas',
  title: 'Modularizacao incremental do runtime e hardening de tools',
  summary:
    'Patch estavel focado em reduzir acoplamento do runtime principal, formalizar contratos entre camadas e endurecer a execucao de tools sem mudar o comportamento esperado do produto em producao.',
  highlights: [
    'Validacao de paths das tools agora usa caminho real canonico para bloquear escape de allowlist por symlink.',
    'Canais IPC, eventos do bot e acoes de settings-update foram centralizados em um contrato compartilhado.',
    'Fluxo de aprovacao manual de tools foi extraido do runtime principal sem mudar o comportamento funcional.',
  ],
  requirements: {
    windows: 'Windows 10/11 64-bit',
    mac: 'macOS 12+ (Monterey)',
    linux: 'Linux x64 moderno'
  },
  downloadFormats: {
    windows: 'Setup.exe + build portatil',
    mac: 'DMG arm64',
    linux: 'AppImage, DEB e RPM'
  }
}
