/**
Loader component to indicate loading state with different styles.

Props:
type: Determines the loader style. Supported values:
"spinner": Shows a spinner with a loading text below.
"pulse": Shows a simple pulsing dot.

text: The descriptive text shown below the spinner (only used for "spinner" type).

The loader covers the entire viewport with a semi-transparent dark overlay,
centering the loading indicator.
*/

import "@/assets/css/loader.css";
import type { LoaderProps } from "@/types/loader";

const Loader = ({ type, text }: LoaderProps) => {
  return (
    <section className="w-screen h-screen flex justify-center items-center z-[5000] fixed top-0 left-0 bg-userboard-bglight/70 dark:bg-userboard-bgdark/70">
      {type === "spinner" ? (
        <div className="flex flex-col justify-center items-center">
          <span className="loader-spinner"></span>
          <span className="pt-2 text-[1.2rem] font-semibold animate-pulse text-userboard-textlight dark:text-userboard-textdark">
            {text}
          </span>
        </div>
      ) : (
        type === "pulse" && <span className="loader-pulse"></span>
      )}
    </section>
  );
};

export default Loader;
