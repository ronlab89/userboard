/**
 * Props interface for an Input component.
 *
 * Properties:
 * - name: string — The name attribute of the input.
 * - id: string — The unique identifier for the input element.
 * - label: string — The text label associated with the input.
 * - placeholder: string — Placeholder text shown inside the input.
 * - required: boolean — Indicates if the input is mandatory.
 * - type: string — The type of the input (e.g., "text", "email", "password").
 * - value: string — The current value of the input.
 * - onChange: (e: React.ChangeEvent<HTMLInputElement>) => void — Event handler called when the input value changes.
 */

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
