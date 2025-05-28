/**
 * Logo Component
 *
 * Displays the app logo alongside the app name.
 *
 * Props:
 * - width: Tailwind CSS class controlling the width of the logo image (e.g., "w-10").
 * - fontSize: Tailwind CSS class for setting the font size of the app name text (e.g., "text-xl").
 */

// Renders the logo image and the app name side by side
const Logo = ({ width, fontSize }: { width: string; fontSize: string }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <img
        src="/logo.webp"
        width={40}
        height={40}
        className={`${width} h-auto`}
        alt="Logo userboard app"
      />
      <span className={`${fontSize} font-bold text-userboard-accent`}>
        UserBoard
      </span>
    </div>
  );
};

export default Logo;
