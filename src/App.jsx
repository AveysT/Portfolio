function App() {
  return (
    <div className="grid grid-rows-[1fr_1fr] h-dvh">
      <header className="h-auto flex flex-col m-auto items-center pt-30">
        <section className=" flex flex-col items-center">
          <article className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-row">
              <h1 className="text-6xl flex items-center">
                Hi, I'm Alejandro Torquemada
                <h1 className="text-6xl flex items-center animate-codebar s:hidden">
                  |
                </h1>
              </h1>
            </div>
            <p className="text-2xl">Front End Developer</p>
            <p className="flex flex-row gap-10">
              <img src="src\assets\html.png" alt="HTML" className="w-10 h-10" />
              <img src="src\assets\css.png" alt="CSS" className="w-10 h-10" />
              <img src="src\assets\js.png" alt="JS" className="w-10 h-10" />
              <img
                src="src\assets\react.png"
                alt="React"
                className="w-10 h-10"
              />
              <img
                src="src\assets\github.png"
                alt="GitHub"
                className="w-10 h-10"
              />
            </p>
          </article>
        </section>
      </header>

      <main className="h-[100%] flex flex-col m-auto pt-20 pb-20">
        <section className="w-screen max-w-3xl flex flex-col gap-3 p-4">
          <article className="flex flex-col gap-2">
            <h2 className="text-3xl text-main">What i do</h2>
            <ul className="text-m list-disc list-inside">
              <li>Write HTML with a proper semantic</li>
              <li>Find the best style in CSS</li>
              <li>Create funcitions that helps and make the web interactive</li>
              <li>RESTful APIs and components are the way to go</li>
              <li>Always keep updated</li>
            </ul>
            <p className="text-xs self-end">
              * Those are some of the things I am better at, but I can do more!
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
