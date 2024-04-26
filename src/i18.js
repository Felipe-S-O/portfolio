import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      BemVindo: "Bem-vindo ao meu portfólio",
      Sobre: "Sobre",
      Tecnologias: "Tecnologias",
      Projetos: "Projetos",
      Contato: "Contato",
      Apresentacao:
        "Um desenvolvedor full stack, apaixonado por tecnologia...Conheça os meus projetos abaixo:",
      SobreMim: "Sobre mim",
      SaibaMais: "Saiba Mais",
      QuemSou:
        "Interessado por tecnologia desde pequeno. Acredito que a tecnologia tem o poder de transformar o mundo, trazendo acessibilidade, disrupção e evolução para todos, dessa forma fico entusiasmado em fazer parte dessa transformação. Possuo experiência na construção de projetos full stack e familiaridade com conceitos de reatividade, autenticação, autorização, construção de documentação de APIs com swagger, e desenvolvimento de aplicações. Vivências em utilização de Metodologias ágeis (Scrum e Kanban).",
      controleEstoque: "Controle de estoque de e-commerce",
      cadastroClient: "Cadastro de clientes/contatos",
      cadastroDevs: "Cadastro de desenvolvedores/tecnologia",
      restaurantApi: "Api para reservas em restaurantes",
      direitos: "Todos os direitos reservados",
      project1Description:
        "Agenda aí é uma aplicação desenvolvida em React Native, com essa aplicação é possível gerenciar seus horários e controla os agendamentos do dia há dias!",
      project2Description:
        "Sistema de Controle de Vendas, solução completa para gerenciar pequenas e micro empresas! Com o inottec CDV é possível efetuar cadastro de clientes, produtos, fornecedores e emissão de cupom não Fiscal.",
      project3Description:
        "É um jogo que tem o objetivo de ganhar o maior número possível de pontos, controlando um pássaro (tocando na tela) sem deixá-lo colidir nos canos. Se o pássaro tocar em algum obstáculo ou se deixar o pássaro cair, o jogo termina. Sempre que o personagem passa por um conjunto de canos, o jogador ganha um ponto.",
      project4Description:
        "Lista de tarefa é uma aplicação web desenvolvida em react, com essa aplicação é possível obter o controle de todas as suas tarefas do dia há dias!",
      project5Description:
        "Indicado para crianças de 2 a 6 anos, esse aplicativo pode ser útil também aos mais crescidos, mas que estão aprendendo inglês. Afinal, quanto mais cedo você começar a praticar, mais chances você tem de conquistar a tão desejada fluência.",
      project6Description:
        "Aplicativo que faz o cálculo de economia e identifica qual o melhor combustível utilizar.",
      Aplicacao: "Aplicação",
      Repositorio: "Repositório",
      Local: "Onde moro?",
      Download: "Baixar Currículo",
      Contato: "Entrar em Contato",
      VerDetalhes: "Ver detalhes",
      Detalhes: "Detalhes do Projeto",
    },
  },
  en: {
    translation: {
      BemVindo: "Welcome to my portfolio",
      Sobre: "About Me",
      Tecnologias: "Stacks",
      Projetos: "Projects",
      SaibaMais: "Know more",
      Contato: "Contact",
      Apresentacao:
        "A full stack developer, passionate about technology... Discover my projects below:",
      SobreMim: "About me",
      QuemSou:
        "Interested in technology since I was little. I believe that technology has the power to transform the world, bringing accessibility, disruption and evolution to everyone, so I am excited to be part of this transformation. I have experience in building full stack projects and familiarity with concepts of reactivity, authentication, authorization, building API documentation with swagger, and application development. Experience using agile methodologies (Scrum and Kanban).",
      cadastroClient: "Customer/contact registration",
      cadastroDevs: "Developer/technology registration",
      restaurantApi: "API for restaurant reservations",
      direitos: "All rights reserved",
      project1Description:
        "Calendar is an application developed in React Native, with this application you can manage your schedules and control the day's schedules for days!",
      project2Description:
        "Sales Control System, complete solution for managing small and micro businesses! With inottec CDV it is possible to register customers, products, suppliers and issue non-tax coupons.",
      project3Description:
        "It's a game that aims to earn as many points as possible by controlling a bird (by touching the screen) without letting it crash into the pipes. If the bird touches any obstacle or if you let the bird fall, the game ends. Whenever the character passes through a set of pipes, the player gains a point.",
      project4Description:
        "Task List is a web application developed in React, with this application you can get control of all your daily tasks for days!",
      project5Description:
        "Recommended for children aged 2 to 6, this application can also be useful for older children who are learning English. After all, the sooner you start practicing, the more likely you are to achieve the much-desired fluency.",
      project6Description:
        "Application that calculates savings and identifies the best fuel to use.",
      Aplicacao: "Application",
      Repositorio: "Repository",
      Local: "Where do I live ?",
      Download: "Download curriculum",
      Contato: "Get in Touch",
      VerDetalhes: "See details",
      Detalhes: "Project details",
    },
  },
};

i18n
  .use(initReactI18next) // inicializa react-i18next
  .init({
    resources,
    lng: "pt", // idioma padrão
    fallbackLng: "pt", // idioma de fallback
    interpolation: {
      escapeValue: false, // não escapar strings traduzidas para HTML
    },
  });

export default i18n;
