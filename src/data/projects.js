import inottecBirdImg from "../assets/inottecBird.gif";
import agendaAiImg from "../assets/agenda-ai.jpg";
import listaTarefasmg from "../assets/lista-tarefas.jpg";
import inottecPdvImg from "../assets/inottec-pdv.png";
import aprendendoImg from "../assets/aprendendo-Ingles.gif";
import alcoolGasolinamg from "../assets/alcoolGasolina.gif";

export const projects = [
  {
    id: 1,
    name: "Agenda ai",
    applicationLink: "https://cursos.alura.com.br/vitrinedev/felipe-s-o/project/agenda-ai-v2/18294695",
    repositoryLink: "https://github.com/Felipe-S-O/agenda-ai-v2",
    image: agendaAiImg,
    techs: ["React Native", "Firebase" ,"Axios"],
  },
  {
    id: 2,
    name: "inottec PDV",
    applicationLink:
      "https://cursos.alura.com.br/vitrinedev/felipe-s-o/project/inottec_CDV/18296384",
    repositoryLink: "https://github.com/Felipe-S-O/inottec_CDV",
    image: inottecPdvImg,
    techs: [
      "JavaFX",
      "MariaDB",
    ],
  },
  {
    id: 3,
    name: "inottecBird",
    applicationLink: "https://cursos.alura.com.br/vitrinedev/felipe-s-o/project/inottecBird/18295993",
    repositoryLink: "https://github.com/Felipe-S-O/inottecBird",
    image: inottecBirdImg,
    techs: [
      "Java",
      "LibGDX",
    ],
  },
  {
    id: 4,
    name: "Lista de Tarefas",
    applicationLink: "https://tarefas-tawny.vercel.app/",
    repositoryLink: "https://github.com/Felipe-S-O/App-tarefas",
    image: listaTarefasmg,
    techs: ["React", "Nextjs", "Axios", "tailwind"],
  },
  {
    id: 5,
    name: "Aprendendo Ingles",
    applicationLink:
      "https://cursos.alura.com.br/vitrinedev/felipe-s-o/project/Aprendendo-Ingles/18296294",
    repositoryLink: "https://github.com/Felipe-S-O/Aprendendo-Ingles",
    image: aprendendoImg,
    techs: ["Java"],
  },
  {
    id: 6,
    name: "Álcool ou Gasolina",
    applicationLink:
      "https://cursos.alura.com.br/vitrinedev/felipe-s-o/project/app-alcool-ou-gasolina/18296400",
    repositoryLink: "https://github.com/Felipe-S-O/app-alcool-ou-gasolina",
    image: alcoolGasolinamg,
    techs: ["Java"],
  },
];
