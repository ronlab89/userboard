import ToggleTheme from "./components/commons/ToggleTheme";

function App() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-w-screen max-w-screen min-h-screen max-h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors funnel-sans"
    >
      userboard
      <ToggleTheme position="absolute" right="0" top="0" />
    </main>
  );
}

export default App;
