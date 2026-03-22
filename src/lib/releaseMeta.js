export const releaseMeta = {
  version: '4.2.2',
  date: '2026-03-21',
  badge: 'Release estavel com renderer em app:// e pipeline endurecida',
  title: 'Confiabilidade operacional da release e do renderer',
  summary:
    'Patch estavel focado em confiabilidade operacional: renderer em app://, shell.exec sem shell intermediario, smoke test do binario empacotado e release pipeline mais profissional.',
  highlights: [
    'Renderer migrado para app://botassist/* com hardening adicional no Electron.',
    'shell.exec agora valida por comando-base e bloqueia shell composto, pipes e redirecionamento.',
    'Smoke do app empacotado valida onboarding, owner por token, tools e fluxo de update.',
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
