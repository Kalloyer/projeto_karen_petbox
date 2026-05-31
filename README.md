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

Versões otimizadas WebP com fallback:

- `public/images/petbox-essencial.webp` + fallback `.png`
- `public/images/petbox-club.webp` + fallback `.png`
- `public/images/petbox-premium.webp` + fallback `.png`

Os cards usam `<picture>` com `loading="lazy"` e `decoding="async"`.

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

Quando o tipo de pet é **Outro**, o formulário exibe o campo condicional **Qual é o animal?**,
que se torna obrigatório e alimenta o resultado da personalização.

## LGPD e confiança

Na seção de benefícios, o card **Dados protegidos pela LGPD** explica o uso de dados
com foco em segurança, transparência e privacidade, com link externo para referência da lei.

## Assinatura visual

Patinhas decorativas aparecem ao longo das seções como elemento de identidade da marca,
com opacidade reduzida para não prejudicar legibilidade.

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
