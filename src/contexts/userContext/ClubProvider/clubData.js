// armazena todos os dados do atleta
export const clubData = {

  // dados gerais do perfil
  profile:
  {
    // dados usados no banner do atleta. Badge = icone referente ao atual plano dele
    banner: {

    },

    // Informações que são exibidas abaixo do banner
    info:
      {

      },

    // Fotos ou vídeos no perfil do usuário
    photos: [
      { src: '/assets/images/background.png' },
    ],

    videos: [
      { url: 'https://vimeo.com/953545193', id: 2 },
      { url: '/assets/videos/silas.mp4', id: 1 },
      { url: 'https://vimeo.com/953545193', id: 3 },
    ],

    // Histórico de clubes do usuário
    competitions: [

    ],

    // Títulos já conquistados pelo usuário
    awards: [

    ],

  },

  //  lista de benefícios da conta do usuário.
  //  Ao clicar é direcionado a página do benefício clicado.
  //  Caso tenha isLocked como true, a estilização do componente
  //  vai ser alterada e ao clicar ele vai direcionar automaticamente para a página de planos
  benefits: [

  ],

  friends: [

  ],
};
