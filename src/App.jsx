import { Tooltip } from "react-tooltip";
import { SlArrowDown, SlDocs, SlEnvolope } from "react-icons/sl";
import ProjectCard from "./components/projectCard";

function App() {
  function mailCopy() {
    navigator.clipboard.writeText("Alejandrotorquemada@gamil.com");
  }

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
                  src="/Portfolio/html.png"
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
                  src="/Portfolio/css.png"
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
                  src="/Portfolio/js.png"
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
                  src="/Portfolio/react.png"
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
                  src="/Portfolio/github.png"
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
              <h2 className="text-3xl text-main">What I do</h2>
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

        <footer className=" h-[100%] flex flex-col m-auto pt-20 pb-20 items-center">
          <h2 className="text-3xl text-main">Socials</h2>
          <section className="flex flex-row items-center gap-4 mt-10 mb-10 max-2xl:flex-col">
            <div className="flex flex-row gap-4 rounded-lg hover:shadow-[0px_0px_16px_0px_rgba(0,_0,_0,_0.3)] transition-all duration-300">
              <div className="flex flex-row gap-2 text-3xl border-2 border-r-0 border-gray-400 bg-gray-200 p-4 rounded-l-lg justify-center items-center ">
                <SlEnvolope />
              </div>
              <div className="-ml-6 flex flex-row gap-2 border-2 border-l-gray-200 border-r-gray-200 border-gray-400 bg-gray-100 p-4 -z-10">
                <p className="text-lg">Alejandrotorquemada@gmail.com</p>
              </div>
              <button
                onClick={mailCopy}
                className="-ml-6 flex flex-row gap-2 text-3xl border-2 border-l-0 border-gray-400 bg-gray-200 p-4 rounded-r-lg justify-center items-center hover:bg-gray-300 transition-colors duration-300"
              >
                <SlDocs />
              </button>
            </div>
            <nav className="flex flex-row gap-4  items-center justify-center">
              <a
                href="https://www.linkedin.com/in/alejandro-torquemada/"
                target="_blank"
              >
                <img
                  src="Portfolio\linkedin.png"
                  className="max-h-15 hover:shadow-[0px_0px_16px_0px_rgba(0,_0,256,_0.6)] rounded-lg transition-all duration-300"
                />
              </a>
              <a href="https://github.com/AveysT" target="_blank">
                <img
                  src="Portfolio\github.png"
                  className="max-h-15 hover:shadow-[0px_0px_16px_0px_rgba(0,_0,_0,_0.6)] rounded-lg transition-all duration-300"
                />
              </a>
            </nav>
          </section>
        </footer>
      </div>
    </>
  );
}

export default App;
