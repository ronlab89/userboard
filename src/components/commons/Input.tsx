/**
 * Input
 *
 * A reusable and accessible form input component with support for label, placeholder,
 * and controlled value handling.
 *
 * Props:
 * - `name` (string): The name attribute for the input, used in form submission.
 * - `id` (string): A unique identifier for the input, used for label association.
 * - `label` (string): Text displayed above the input field to describe its purpose.
 * - `placeholder` (string): Optional hint text inside the input field.
 * - `required` (boolean): Indicates whether the field is mandatory.
 * - `type` (string): The HTML input type (e.g., "text", "email", "password").
 * - `value` (string): Controlled value for the input field.
 * - `onChange` (function): Callback triggered when the input value changes.
 *
 * Accessibility:
 * - The `label` element is associated with the `input` via `htmlFor` and `id`.
 * - The `required` attribute is included for built-in validation.
 * - Supports dark and light modes for better readability.
 *
 * Example:
 * ```tsx
 * <Input
 *   id="email"
 *   name="email"
 *   label="Email"
 *   placeholder="Enter your email"
 *   required={true}
 *   type="email"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 * />
 * ```
 */

import type { InputProps } from "@/types/input";

const Input = ({
  name,
  id,
  label,
  placeholder,
  required,
  type,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="col-span-2">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        id={id}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
