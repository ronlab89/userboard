export interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  styles?: string;
  disabled?: boolean;
  ariaLabel?: string;
  method?: () => void;
}
