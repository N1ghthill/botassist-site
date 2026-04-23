export const releaseMeta = {
  version: '4.2.6',
  date: '2026-04-22',
  badge: 'Release estável com alinhamento operacional pós-segurança',
  title: 'Alinhamento operacional da release de segurança',
  summary:
    'Patch estável focado em promover a correção de segurança para a linha publicada com versão coerente, gate de audit rastreável no CI e documentação alinhada ao estado real da release.',
  cards: [
    {
      title: 'Gate rastreável de audit',
      description:
        'O CI deixa de ignorar vulnerabilidades críticas novas e passa a aceitar apenas a cadeia transitiva documentada do baileys/libsignal/protobufjs.'
    },
    {
      title: 'Versão publicada coerente',
      description:
        'A linha estável sobe para 4.2.6 sem reescrever a prerelease v4.2.5, mantendo comunicação, tag e artefatos alinhados.'
    },
    {
      title: 'Documentação corrigida',
      description:
        'Notas públicas e advisory passam a refletir o estado real da release e da validação executada.'
    }
  ],
  highlights: [
    'CI volta a falhar para vulnerabilidades críticas novas e aceita apenas a cadeia transitiva já documentada.',
    'Versão do app, lockfile e changelog estruturado sobem juntos para 4.2.6.',
    'Documentação de segurança e release deixa de sobredeclarar o estado de validação.',
    'Patch revalidado com testes automatizados e gate dedicado de security audit.'
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
