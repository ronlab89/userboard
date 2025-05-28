/**
 * Navbar Component
 *
 * A responsive navigation bar that includes the application logo and a theme toggle button.
 *
 * Features:
 * - Skip link for accessibility to jump directly to the main content.
 * - Responsive layout with padding and border styling for both light and dark themes.
 * - Integrates the `Logo` and `ToggleTheme` components.
 */

import ToggleTheme from "@/components/commons/ToggleTheme";
import Logo from "@/components/commons/Logo";

// Renders the navigation bar with logo and theme toggle
const Navbar = () => {
  return (
    <nav className="bg-transparent border-b border-userboard-borderlight dark:border-userboard-borderdark max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-[20px] md:px-[40px] py-4 md:py-4">
      {/* Accessibility: Skip to main content link */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Saltar al contenido principal
      </a>
      {/* App logo with responsive size */}
      <Logo width="w-[30px] md:w-[40px]" fontSize="text-xl md:text-2xl" />
      {/* Navigation list containing the theme toggle */}
      <ul
        id="navbar-dropdown"
        className="w-auto flex flex-col font-medium mt-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
      >
        <li>
          <ToggleTheme position="relative" right="right-0" top="top-0" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
