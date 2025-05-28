export interface InputProps {
  name: string;
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
