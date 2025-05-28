/**
 * App.tsx
 *
 * Main application component that defines the global layout and structure.
 * Renders the navigation bar, the main user management section, notification system,
 * and a conditional loader based on the global loading state.
 *
 * Structure:
 * - <Navbar />: Main navigation header.
 * - <Users />: Main section displaying user table and actions.
 * - <Modal />: Modal component for adding new users and deleting existing ones.
 * - <Toaster />: Global toast notification system.
 * - <Loader />: Conditionally displayed when any user-related async action is in progress.
 *
 * Styling:
 * - Uses theme-aware Tailwind classes and a custom font (`funnel-sans`) for a modern UI.
 */

import { lazy, Suspense } from "react";
import { useLoadingStore } from "@/store/loading.store";

import Navbar from "@/components/navigation/Navbar";
import Users from "@/components/users/Users";
import { Toaster } from "sonner";

// Lazy load loader and modal components for better performance
const Loader = lazy(() => import("@/components/commons/Loader"));
const Modal = lazy(() => import("./components/commons/Modal"));

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
      {/* Hidden heading for accessibility */}
      <h1 className="sr-only">Gestión de usuarios simple y eficiente</h1>
      <section className="w-full h-full p-10">
        <Users />
      </section>
      {/* Modal */}
      <Suspense fallback={""}>
        <Modal />
      </Suspense>
      {/* Notification system */}
      <Suspense
        fallback={<span className="sr-only">Cargando notificaciones…</span>}
      >
        <Toaster />
      </Suspense>
      {/* Conditional loader based on async operations */}
      {loading?.users || loading?.createUser || loading?.deleteUser ? (
        <Suspense fallback={<span className="sr-only">Cargando loader…</span>}>
          <Loader type="spinner" text="" />
        </Suspense>
      ) : null}
    </main>
  );
}

export default App;
