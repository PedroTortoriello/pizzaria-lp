# Paradise Pizza's

Site institucional da Paradise Pizza's para apresentação do buffet gourmet de pizza de longa fermentação, cardápio, estrutura de evento, entradas especiais, política de pagamento e canais de contato.

## Stack

- Next.js com App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Requisitos

- Node.js 20 LTS ou superior
- npm 10 ou superior

## Instalação

```bash
npm install
```

## Ambiente Local

```bash
npm run dev
```

O projeto roda em:

```text
http://localhost:3000
```

O script de desenvolvimento usa Webpack:

```json
"dev": "next dev --webpack"
```

Essa configuração evita instabilidades de chunks em ambiente local e mantém o comportamento previsível durante manutenção.

## Scripts

```bash
npm run dev
```

Sobe o servidor local de desenvolvimento.

```bash
npm run typecheck
```

Executa a validação TypeScript sem gerar build.

```bash
npm run build
```

Gera o build otimizado de produção.

```bash
npm run start
```

Serve o build de produção gerado pelo Next.js.

## Estrutura Principal

```text
app/
  icon.svg              Favicon do site
  globals.css           Estilos globais e utilitários visuais
  layout.tsx            Metadata e layout raiz
  page.tsx              Composição da página

components/
  BrandIcons.tsx        Ícones SVG de WhatsApp, Instagram, TikTok e YouTube
  Header.tsx            Navegação fixa e CTA principal
  HeroSection.tsx       Primeira dobra do site
  SitePreloader.tsx     Loading inicial de 3 segundos
  StorySection.tsx      Experiência Paradise Pizza's
  ItalianSoulSection.tsx Destaques visuais da experiência
  ExperienceSection.tsx Estrutura, duração e serviço
  MenuHighlights.tsx    Cardápio com imagens do PDF
  SpecialEntriesSection.tsx Entradas especiais
  PoliciesSection.tsx   Política de valores e pagamentos
  GalleryIngredients.tsx Galeria visual
  Footer.tsx            Contato e redes sociais
  FloatingWhatsApp.tsx  CTA flutuante para WhatsApp

data/
  site.ts               Conteúdo centralizado do site

public/
  pdf-pizzas/           Imagens extraídas do PDF
```

## Conteúdo

O conteúdo textual foi organizado a partir do PDF oficial da Paradise Pizza's:

- Pizza de longa fermentação
- Buffet gourmet
- Fermentação natural de 48 horas
- Produção artesanal
- Ingredientes selecionados
- Pizzas montadas e assadas na hora
- Rodízio de 4 horas
- Estrutura do evento
- Formatos de serviço
- Entradas especiais
- Política de valores e pagamentos
- Redes sociais oficiais

As informações editáveis ficam em:

```text
data/site.ts
```

## Cardápio

As imagens das pizzas foram extraídas do PDF, recortadas, centralizadas e normalizadas para manter consistência visual nos cards.

Arquivos finais:

```text
public/pdf-pizzas/normalized/
```

Sabores cadastrados:

- Caprese
- Pepperoni
- Margherita
- Abobrinha
- Três Queijos
- Calabresa
- Frango com Catupiry
- Rúcula
- Di Parma
- Morango com Chocolate
- Banana Nevada

## Contatos e Redes Sociais

Os links ficam centralizados em `data/site.ts`:

```ts
export const whatsappUrl = "...";

export const socialLinks = {
  instagram: "...",
  tiktok: "...",
  youtube: "..."
};
```

Para alterar WhatsApp, Instagram, TikTok ou YouTube, edite apenas esse arquivo.

## Imagens e Vídeos

O cardápio usa assets locais extraídos do PDF.

Algumas seções visuais usam imagens e vídeos remotos definidos em `data/site.ts`. Antes de publicar em um ambiente final de longo prazo, é recomendado baixar esses arquivos para `public/` e trocar os links remotos por caminhos locais.

## Checklist Antes de Publicar

1. Confirmar número do WhatsApp em `data/site.ts`.
2. Confirmar links de Instagram, TikTok e YouTube.
3. Revisar textos comerciais com o cliente.
4. Executar `npm run typecheck`.
5. Executar `npm run build`.
6. Testar desktop e mobile.
7. Testar botões de WhatsApp e redes sociais.
8. Conferir se todas as imagens do cardápio carregam.
9. Conferir favicon em `/icon.svg`.

## Build de Produção

```bash
npm run typecheck
npm run build
```

Se ambos passarem, o projeto está apto para deploy.

Para testar localmente o build final:

```bash
npm run start
```

## Deploy

O projeto é compatível com deploy em Vercel.

Configuração recomendada:

```text
Framework Preset: Next.js
Install Command: npm install
Build Command: npm run build
Output Directory: .next
```

Não há variáveis de ambiente obrigatórias na versão atual.

## Manutenção

- Conteúdo textual e URLs: `data/site.ts`
- Componentes visuais: `components/`
- Paleta e tokens do Tailwind: `tailwind.config.ts`
- Estilos globais: `app/globals.css`
- Favicon: `app/icon.svg`
- Imagens do cardápio: `public/pdf-pizzas/normalized/`

## Qualidade

Última validação recomendada antes de entrega:

```bash
npm run typecheck
npm run build
```

Esses comandos devem passar sem erros antes de qualquer publicação.
