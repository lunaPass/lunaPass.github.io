# HELOÍSA LUNA | Portfólio de Editora de Vídeo

Portfólio profissional desenvolvido em React + Vite para apresentação de trabalhos de edição de vídeo.

## Stack

- **React 19** + **Vite 8**
- CSS Modules (componentes individuais)
- Google Fonts (Dancing Script, Outfit, Ubuntu)

## Estrutura

```
src/
├── components/
│   ├── Navbar.jsx + .css
│   ├── Hero.jsx + .css
│   ├── Work.jsx + .css
│   ├── About.jsx + .css
│   ├── Contact.jsx + .css
│   ├── Footer.jsx + .css
│   └── Cursor.jsx + .css
├── App.jsx + App.css
├── main.jsx
└── index.css
```

## Comandos

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build
npm run lint     # Verificação de código
```

## Seções

| Seção | Descrição |
|------|-----------|
| Hero | Efeito de luz dinâmico que segue o mouse |
| Work | Portfólio com filtro por categoria (Shorts/Reels, YouTube) |
| About | Contadores animados (500+ vídeos, 10M+ visualizações) |
| Contact | Formulário de contato (frontend) |
| Cursor | Cursor personalizado (oculto em mobile <768px) |

## Tecnologias

- **Edição:** Adobe Premiere Pro, After Effects
- **Design:** Photoshop, Audition
- **Frontend:** React, CSS3, JavaScript

## Observações

- O formulário de contato requer integração com backend
- Cursor personalizado ocultado em dispositivos móveis
- Imagem de fundo: `public/setup-image.png`