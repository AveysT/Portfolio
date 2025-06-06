import { SlLink } from "react-icons/sl";

const Projects = [
  {
    link: "aveyst.github.io/Converter/",
    name: "Converter",
    description:
      "A currency converter app built with React, fully responsive, featuring a chart that displays exchange rate trends.",
  },
  {
    link: "aveyst.github.io/TicTacToe/",
    name: "Tic Tac Toe",
    description:
      "A simple Tic Tac Toe game built with React, using Tailwind CSS for styling and animations that respond to cursor movement.",
  },
];

const Card = ({ project }) => {
  return (
    <div className="flex flex-row w-[600px] h-[300px] max-2xl:w-[400px] max-2xl:flex-col rounded-2xl shadow-lg ">
      <img
        src="src\assets\AlejandroTorquemada.jpeg"
        alt="Project Thumbnail"
        className="w-2/3 max-2xl:w-fit rounded-2xl max-lg:p-0 max-2xl:rounded-t-2xl max-2xl:rounded-b-none"
      />
      <div className="flex flex-col justify-between p-4">
        <h2 className="text-4xl font-semibold mb-2">{project.name}</h2>
        <p className="text-sm">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          className="parentLink transition-all duration-400"
        >
          <SlLink className="childrenLink transition-all duration-400" />
          <spam className="childrenText transition-all duration-400">Link</spam>
        </a>
      </div>
    </div>
  );
};

function ProjectCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row-2 max-2xl:flex-col gap-10 ml-10 w-[1400px] max-2xl:w-100 justify-center">
        {Projects.map((link, index) => (
          <Card key={index} project={link} />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
