/**
 * RemoveUser icon component rendered as an SVG.
 *
 * @param {number|string} width - The width of the icon.
 * @param {number|string} height - The height of the icon.
 * @param {string} styles - Additional CSS classes to style the icon.
 *
 * @accessibility
 * Includes a <title> element with descriptive text "Eliminar" for screen readers.
 * The SVG has role="img" and is labeled by the title for accessibility.
 */

import type { IconProps } from "@/types/icon";

const RemoveUser = ({ width, height, styles }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={styles}
      viewBox="0 0 32 32"
      role="img"
      aria-labelledby="remove-icon-title"
    >
      <title id="remove-icon-title">Eliminar</title>
      <path
        fill="currentColor"
        d="M14 4c-3.854 0-7 3.146-7 7c0 2.41 1.23 4.552 3.094 5.813C6.527 18.343 4 21.88 4 26h2c0-4.43 3.57-8 8-8c1.376 0 2.654.358 3.78.97A8 8 0 0 0 16 24c0 4.406 3.594 8 8 8s8-3.594 8-8s-3.594-8-8-8a7.98 7.98 0 0 0-4.688 1.53c-.442-.277-.92-.51-1.406-.718A7.02 7.02 0 0 0 21 11c0-3.854-3.146-7-7-7m0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5m10 12c3.326 0 6 2.674 6 6s-2.674 6-6 6s-6-2.674-6-6s2.674-6 6-6m-2.28 2.28l-1.44 1.44L22.563 24l-2.28 2.28l1.437 1.44L24 25.437l2.28 2.28l1.44-1.437L25.437 24l2.28-2.28l-1.437-1.44L24 22.563l-2.28-2.28z"
      />
    </svg>
  );
};

export default RemoveUser;
