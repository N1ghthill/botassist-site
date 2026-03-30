export const releaseMeta = {
  version: '4.2.4',
  date: '2026-03-29',
  badge: 'Release estavel com dependencias saneadas e fechamento do patch de release',
  title: 'Saneamento de dependencias e fechamento do patch de release',
  summary:
    'Patch estavel de manutencao focado em atualizar dependencias vulneraveis de producao, manter a verificacao pos-publicacao no fluxo e alinhar a documentacao da linha 4.2.4 antes do proximo tag.',
  cards: [
    {
      title: 'Dependencias saneadas',
      description:
        'mailparser foi atualizado para 3.9.6, puxando nodemailer 8.0.4 e zerando vulnerabilidades de producao nessa trilha.'
    },
    {
      title: 'Release mais verificavel',
      description:
        'A verificacao pos-publicacao com release:verify segue incorporada ao fluxo para reduzir drift entre feeds, assets e docs.'
    },
    {
      title: 'Patch revalidado',
      description:
        'A linha 4.2.4 foi rechecada com lint, testes, build Linux --dir, smoke do binario empacotado e auditoria de dependencias.'
    }
  ],
  highlights: [
    'mailparser atualizado para 3.9.6, puxando nodemailer 8.0.4 e eliminando vulnerabilidades de producao nessa cadeia.',
    'Verificacao pos-publicacao via release:verify mantida no fluxo para revalidar feeds e assets reais publicados.',
    'Patch revalidado com lint, testes, build Linux --dir, smoke do binario empacotado e auditoria de dependencias.'
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
