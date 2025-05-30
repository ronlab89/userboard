/**
 * Reload icon component rendered as an SVG.
 *
 * @param {number|string} width - The width of the icon.
 * @param {number|string} height - The height of the icon.
 * @param {string} styles - Additional CSS classes to style the icon.
 *
 * @accessibility
 * Includes a <title> element with descriptive text "Recargar" for screen readers.
 * The SVG has role="img" and is labeled by the title for accessibility.
 */

import type { IconProps } from "@/types/icon";

const Reload = ({ width, height, styles }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={styles}
      viewBox="0 0 20 20"
      role="img"
      aria-labelledby="reload-icon-title"
    >
      <title id="reload-icon-title">Recargar</title>
      <path
        fill="currentColor"
        d="M19.295 12a.704.704 0 0 1 .705.709v3.204a.704.704 0 0 1-.7.709a.704.704 0 0 1-.7-.709v-1.125C16.779 17.844 13.399 20 9.757 20c-4.41 0-8.106-2.721-9.709-6.915a.71.71 0 0 1 .4-.917c.36-.141.766.04.906.405c1.4 3.662 4.588 6.01 8.403 6.01c3.371 0 6.52-2.182 7.987-5.154l-1.471.01a.704.704 0 0 1-.705-.704a.705.705 0 0 1 .695-.714zm-9.05-12c4.408 0 8.105 2.721 9.708 6.915a.71.71 0 0 1-.4.917a.697.697 0 0 1-.906-.405c-1.4-3.662-4.588-6.01-8.403-6.01c-3.371 0-6.52 2.182-7.987 5.154l1.471-.01a.704.704 0 0 1 .705.704a.705.705 0 0 1-.695.714L.705 8A.704.704 0 0 1 0 7.291V4.087c0-.392.313-.709.7-.709s.7.317.7.709v1.125C3.221 2.156 6.601 0 10.243 0"
      />
    </svg>
  );
};

export default Reload;
