import { useEffect, useState } from "react";
import { SlLink } from "react-icons/sl";

const Card = ({ project }) => {
  return (
    <div className="grid grid-cols-2 gap-5 w-[50%] max-2xl:w-[100%] min-h-80 max-2xl:grid-cols-1 rounded-2xl shadow-[0px_0px_16px_0px_rgba(0,_0,_0,_0.1)] group">
      <a
        href={project.link}
        target="_blank"
        className="bg-gray-100 col-span-1 rounded-2xl flex items-center justify-center relative overflow-hidden aspect-[4/4] max-2xl:aspect-[4/2] w-full "
      >
        <span className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-700 group-hover:opacity-0 max-2xl:group-hover:opacity-100">
          <img
            src={project.holder}
            className="w-full h-full object-cover max-2xl:object-contain"
          />
        </span>
        <span className="absolute inset-0 flex items-center justify-center z-20 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
          <img
            src={project.img}
            className="w-full h-full object-cover max-2xl:hidden"
          />
        </span>
      </a>

      <div className="grid col-span-1 gap-4 pt-4 max-2xl:mx-4 max-2xl:pb-10 max-2xl:gap-7">
        <h2 className="text-4xl font-semibold mb-2">{project.name}</h2>
        <p className="text-sm">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          className="parentLink transition-all duration-400"
        >
          <SlLink className="childrenLink transition-all duration-400" />
          <span className="childrenText transition-all duration-400">Link</span>
        </a>
      </div>
    </div>
  );
};

function ProjectCard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Portfolio/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center my-10">Loading projects...</div>;
  }

  return (
    <div className="flex flex-row-2 gap-10 w-[1400px] max-2xl:flex-col max-2xl:w-auto max-2xl:max-w-200 mx-10 justify-center items-center">
      {projects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectCard;
