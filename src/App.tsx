import Navbar from "@/components/navigation/Navbar";

function App() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-w-screen max-w-screen min-h-screen max-h-screen overflow-hidden bg-userboard-bglight dark:bg-userboard-bgdark text-userboard-textlight dark:text-userboard-textdark transition-colors funnel-sans"
    >
      <header>
        <Navbar />
      </header>
      <h1 className="sr-only">Gestión de usuarios simple y eficiente</h1>
    </main>
  );
}

export default App;
