# PetBox Club

Landing page responsiva da PetBox Club com foco comercial em assinatura mensal para pets, planos com composições próprias e personalização por perfil.

## Tecnologias

- React
- Vite
- CSS
- Lucide React

## Identidade visual

Paleta principal aplicada:

- Creme: `#FFFFF0`
- Rosa claro: `#FFEBE8`
- Marrom: `#713600`
- Dourado: `#E6AF00`
- Coral de apoio: `#FF6B6B`
- Azul de apoio: `#4D96FF`
- Verde menta de apoio: `#6BCB77`

## Estrutura da landing

- Início
- Como funciona
- Planos
- Benefícios
- Depoimentos
- Contato
- Modal de personalização

## Planos com imagens reais

As imagens de planos estão em:

- `public/images/petbox-essencial.png`
- `public/images/petbox-club.png`
- `public/images/petbox-premium.png`

## Formulário de personalização

Todos os CTAs dos planos abrem o modal com:

- nome do tutor
- e-mail
- nome do pet
- tipo
- idade
- porte
- preferências

Após o envio, o usuário recebe uma prévia personalizada com base no perfil informado.

## Caveman e AGENTS

Referência adotada: [Caveman](https://github.com/JuliusBrussee/caveman)

- Comunicação enxuta e focada em execução.
- Diretrizes operacionais para agentes em [AGENTS.md](./AGENTS.md).

## Execução local

```bash
npm install
npm run dev
```

URL local obrigatória:

```bash
http://localhost:5175
```

## Build

```bash
npm run build
```

## Deploy na Vercel

Configuração recomendada:

- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`
