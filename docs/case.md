# Case - BotAssist Site

## Propósito
Este repositório hospeda o site oficial do BotAssist. A landing deve comunicar o aplicativo gratuito, registrar o estado da release estável (hoje `v4.2.2`) e encaminhar tráfego direto para os assets reais dos lançamentos.

## Responsabilidades principais
- apresentar o BotAssist como produto desktop gratuito, open-source e distribuído por canais reais (`stable`, `beta`, `rc`)
- exibir screenshots, FAQ, benefícios e links claros para downloads em Windows, macOS e Linux
- integrar com os manifests do `electron-builder` (`latest.yml`, `latest-mac.yml`, `latest-linux.yml`) para apontar automaticamente para os assets oficiais
- manter o fluxo editorial alinhado ao que acontece no repositório do app principal

## Atualização operacional
1. Atualize `src/lib/releaseMeta.js` com os destaques da release ativa.
2. Verifique os downloads e a FAQ se a distribuição (shell, tools, fuses) mudou.
3. Garanta que `README.md` e `docs/case.md` reflitam o tom oficial (site, não demo) antes de publicar.

## Contato
- site: abra issue neste repositório
- app: `https://github.com/N1ghthill/botassist-whatsapp/issues`
- e-mail (temas sensíveis): `irving@ruas.dev.br`
