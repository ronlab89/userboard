import type { IconProps } from "@/types/icon";

const Close = ({ width, height, styles }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={styles}
      fill="none"
      viewBox="0 0 14 14"
      role="img"
      aria-labelledby="close-icon-title"
    >
      <title id="close-icon-title">Cerrar</title>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  );
};

export default Close;
