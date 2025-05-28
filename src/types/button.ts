/**
 * Props interface for a Button component.
 *
 * Properties:
 * - text: string — The visible text label of the button.
 * - icon?: React.ReactNode — Optional icon to display alongside the text.
 * - type?: "button" | "submit" | "reset" — Button type attribute, defaults to "button".
 * - styles?: string — Optional CSS class names or styles to apply.
 * - disabled?: boolean — Optional flag to disable the button.
 * - ariaLabel?: string — Optional accessibility label for screen readers.
 * - method?: () => void — Optional callback function to execute on button click.
 */

export interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  styles?: string;
  disabled?: boolean;
  ariaLabel?: string;
  method?: () => void;
}
