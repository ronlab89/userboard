import Navbar from "@/components/navigation/Navbar";
import Loader from "./components/commons/Loader";
import { useLoadingStore } from "./store/loading.store";

function App() {
  const loading = useLoadingStore((state) => state.loading);
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
      {loading?.users || loading?.createUser || loading?.deleteUser ? (
        <Loader type="spinner" text="" />
      ) : null}
    </main>
  );
}

export default App;
