/**
 * Add icon component rendered as an SVG.
 *
 * @param {number|string} width - The width of the icon.
 * @param {number|string} height - The height of the icon.
 * @param {string} styles - Additional CSS classes to style the icon.
 *
 * @accessibility
 * Includes a <title> element with descriptive text "Agregar" for screen readers.
 * The SVG has role="img" and is labeled by the title for accessibility.
 */

import type { IconProps } from "@/types/icon";

const Add = ({ width, height, styles }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={styles}
      viewBox="0 0 24 24"
      role="img"
      aria-labelledby="add-icon-title"
    >
      <title id="add-icon-title">Agregar</title>
      <path
        fill="currentColor"
        d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6v2H5v14h14v-6h2v6q0 .825-.587 1.413T19 21zm11-10V8h-3V6h3V3h2v3h3v2h-3v3z"
      />
    </svg>
  );
};

export default Add;
