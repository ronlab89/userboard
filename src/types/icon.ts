/**
 * IconProps
 *
 * Interface for defining common props passed to icon components.
 *
 * Properties:
 * - `width` (number): The width of the icon in pixels.
 * - `height` (number): The height of the icon in pixels.
 * - `styles` (string): A string of additional Tailwind CSS or custom class names to apply for styling.
 *
 * Example:
 * ```tsx
 * <CustomIcon width={24} height={24} styles="text-primary" />
 * ```
 */

export interface IconProps {
  width: number;
  height: number;
  styles: string;
}
