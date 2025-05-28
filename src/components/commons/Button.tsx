import type { ButtonProps } from "@/types/button";

const Button = ({
  text,
  icon,
  type,
  styles,
  disabled,
  ariaLabel,
  method,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={method}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`text-userboard-textdark cursor-pointer inline-flex items-center bg-userboard-accent hover:bg-userboard-accent/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${styles}`}
    >
      <span>{icon}</span>
      <span className="ml-2">{text}</span>
    </button>
  );
};

export default Button;
