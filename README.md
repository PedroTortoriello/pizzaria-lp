# Paradise Pizza's Landing Page

Landing page premium para a Paradise Pizza's, construída com Next.js, TypeScript, Tailwind CSS e Framer Motion.

## Rodando localmente

```bash
npm install
npm run dev
```

Depois acesse `http://localhost:3000`.

## Conteúdo usado do PDF

- Massa de fermentação natural de 48 horas.
- Buffet gourmet para casamentos, aniversários, eventos corporativos e confraternizações.
- Rodízio de 4 horas, com 3 horas de pizzas salgadas e 1 hora de pizzas doces.
- Estrutura com forno elétrico profissional, bancada, mesa expositora e equipe.
- Sabores: Caprese, Pepperoni, Margherita, Calabresa, Frango com Catupiry, Di Parma, Banana Nevada e outros.
- Redes sociais extraídas da última página do PDF.

## Ajustes antes de publicar

- Trocar o número em `data/site.ts` na constante `whatsappUrl`.
- Informar endereço real e horários fixos no `Footer`, caso existam.
- Substituir ou baixar as imagens remotas para `public/` se desejar deploy 100% independente de terceiros.

## Referências visuais

Imagens pesquisadas no Unsplash e usadas via URLs remotas:

- Forno/pizzaiolo: https://unsplash.com/photos/a-chef-cooks-pizza-in-a-wood-fired-oven-7TAG9wlv1uw
- Forno a lenha: https://unsplash.com/photos/pizza-baking-in-a-wood-fired-oven-with-glowing-embers-SJROkV7Q8oU
- Pizza com mozzarella e manjericão: https://unsplash.com/photos/a-delicious-pizza-with-mozzarella-and-basil-DPrldCuaoJ8
- Massa artesanal: https://unsplash.com/photos/hands-kneading-dough-dusted-with-flour-zZq_Iopl5_Q
- Pizzas e ingredientes: https://unsplash.com/photos/raw-pizza-with-tomatoes-and-mozzarella-cheese-lZNzoxOQUdE

Vídeos pesquisados no Pexels e usados por endpoint remoto de download:

- Pizzaiolo preparando pizza em forno externo: https://www.pexels.com/video/pizzaiolo-preparing-pizza-in-outdoor-oven-35708499/
- Pizza artesanal assando em forno a lenha: https://www.pexels.com/video/artisan-pizza-baking-in-wood-fired-oven-32109696/
- Chef abrindo massa de pizza: https://www.pexels.com/video/chef-stretching-pizza-dough-5897985/
- Pizza em forno de tijolos: https://www.pexels.com/video/a-pizza-in-a-brick-oven-6221680/

O Pexels pode aplicar proteção Cloudflare em requests automatizados. Por isso a página usa os endpoints `https://www.pexels.com/download/video/{id}/` com imagem de fallback.

## Loader

Referências pesquisadas para o preloader:

- LottieFiles Pizza Loader: https://lottiefiles.com/free-animation/pizza-loader-kdMXubEnNE
- LottieFiles Pizza Preloader: https://lottiefiles.com/free-animations/pizza-preloader
- IconScout Pizza Loader: https://iconscout.com/lottie-animations/pizza-loader

A implementação final usa Framer Motion e CSS nativos para manter o carregamento estável, sem depender de hotlink externo.
