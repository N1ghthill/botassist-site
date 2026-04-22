export const releaseMeta = {
  version: '4.2.5',
  date: '2026-04-22',
  badge: 'Release de segurança com correções críticas de vulnerabilidades',
  title: 'Atualização de segurança: correções de vulnerabilidades críticas',
  summary:
    'Release de segurança crítica focada em corrigir vulnerabilidades em dependências. Atualizações de segurança para @xmldom/xmldom, lodash e nodemailer. Todas as correções testadas e validadas sem breaking changes.',
  cards: [
    {
      title: 'Segurança reforçada',
      description:
        'Correção de 4 vulnerabilidades críticas em dependências: @xmldom/xmldom (CVE-2026-34601), lodash (2 vulnerabilidades) e nodemailer.'
    },
    {
      title: 'Testes completos',
      description:
        'Todas as 60+ testes unitários passando, linting e formatação OK, builds funcionais em todas as plataformas.'
    },
    {
      title: 'Documentação transparente',
      description:
        'Vulnerabilidades documentadas em SECURITY_ADVISORY_2026-04-22.md. Processo de segurança estabelecido para monitoramento contínuo.'
    }
  ],
  highlights: [
    '@xmldom/xmldom atualizado para 0.8.13 corrigindo injeção XML (CVE-2026-34601).',
    'lodash atualizado para 4.18.1 corrigindo 2 vulnerabilidades (injeção de código e poluição de protótipo).',
    'nodemailer atualizado via mailparser corrigindo injeção SMTP.',
    'Todas as correções testadas sem breaking changes para usuários existentes.'
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
