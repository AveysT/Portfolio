import { Tooltip } from "react-tooltip";
import { SlArrowDown } from "react-icons/sl";
import ProjectCard from "./components/projectCard";

function App() {
  return (
    <>
      <div className="grid grid-rows-[1fr_1fr] h-dvh items-center">
        <header className="h-auto flex flex-col m-auto items-center pt-30">
          <section className=" flex flex-col items-center">
            <article className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-row">
                <h1 className="text-6xl text-center flex items-center">
                  Hi, I'm Alejandro Torquemada
                  <h1 className="text-6xl flex items-center animate-codebar max-lg:hidden">
                    |
                  </h1>
                </h1>
              </div>
              <p className="text-2xl">Front End Developer</p>
              <p className="flex flex-row gap-10">
                <img
                  src="src\assets\html.png"
                  alt="HTML"
                  data-tooltip-id="HTML-tooltip"
                  data-tooltip-place="bottom"
                  data-tooltip-content="HTML"
                  className="w-10 h-10"
                />
                <Tooltip
                  id="HTML-tooltip"
                  style={{ backgroundColor: "#edf2f7", color: "#000" }}
                />
                <img
                  src="src\assets\css.png"
                  alt="CSS"
                  data-tooltip-id="CSS-tooltip"
                  data-tooltip-place="bottom"
                  data-tooltip-content="CSS"
                  className="w-10 h-10"
                />
                <Tooltip
                  id="CSS-tooltip"
                  style={{ backgroundColor: "#edf2f7", color: "#000" }}
                />
                <img
                  src="src\assets\js.png"
                  alt="JS"
                  data-tooltip-id="JS-tooltip"
                  data-tooltip-place="bottom"
                  data-tooltip-content="JavaScript"
                  className="w-10 h-10"
                />
                <Tooltip
                  id="JS-tooltip"
                  style={{ backgroundColor: "#edf2f7", color: "#000" }}
                />
                <img
                  src="src\assets\react.png"
                  alt="React"
                  data-tooltip-id="React-tooltip"
                  data-tooltip-place="bottom"
                  data-tooltip-content="React"
                  className="w-10 h-10"
                />
                <Tooltip
                  id="React-tooltip"
                  style={{ backgroundColor: "#edf2f7", color: "#000" }}
                />
                <img
                  src="src\assets\github.png"
                  alt="GitHub"
                  data-tooltip-id="GitHub-tooltip"
                  data-tooltip-place="bottom"
                  data-tooltip-content="GitHub"
                  className="w-10 h-10"
                />
                <Tooltip
                  id="GitHub-tooltip"
                  style={{ backgroundColor: "#edf2f7", color: "#000" }}
                />
              </p>
            </article>
          </section>
        </header>

        <section className="h-[100%] flex flex-col m-auto pt-20 pb-20">
          <article className="w-screen max-w-3xl flex flex-col gap-3 p-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl text-main">What i do</h2>
              <ul className="text-m list-disc list-inside">
                <li>Write HTML with a proper semantic</li>
                <li>Find the best style in CSS</li>
                <li>
                  Create funcitions that helps and make the web interactive
                </li>
                <li>RESTful APIs and components are the way to go</li>
                <li>Always keep updated</li>
              </ul>
              <p className="text-xs self-end">
                * Those are some of the things I am better at, but I can do
                more!
              </p>
            </div>
          </article>
        </section>

        <footer className="h-auto flex flex-col m-auto items-center pb-10">
          <div
            className="flex flex-col items-center"
            onClick={() => window.scrollTo({ top: 2000, behavior: "smooth" })}
          >
            <SlArrowDown className="text-2xl text-gray-300 animate-bounce translate-y-3" />
            <SlArrowDown className="text-3xl text-gray-300 animate-bounce" />
          </div>
        </footer>
      </div>
      <div className="grid grid-rows-[1fr_1fr] h-dvh items-center">
        <header className="h-auto flex flex-col m-auto items-center pt-30">
          <section className="text-3xl text-main items-center">
            <ProjectCard />
          </section>
        </header>

        <footer className="h-[100%] flex flex-col m-auto pt-20 pb-20">
          <h2 className="text-3xl text-main">Socials</h2>
        </footer>
      </div>
    </>
  );
}

export default App;
