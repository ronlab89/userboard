/**
 * Utility function for displaying toast notifications using the `sonner` library.
 *
 * This function centralizes and simplifies the use of various toast types by wrapping
 * `sonner`'s toast API into a single reusable `notify` function.
 *
 * Parameters:
 * - `type` (NotifyType): The type of notification to display.
 *   - "success": Displays a success message.
 *   - "warning": Displays a warning message.
 *   - "error": Displays an error message.
 *   - "description": Displays a message with a description using `toast.message`.
 *   - Any other value will fallback to a default toast.
 * - `text` (string): The main message content shown in the toast.
 * - `options` (NotifyOptions): Optional configuration for the toast.
 *   - Can include `description`, duration, style, position, etc., depending on `sonner`'s API.
 *
 * Usage:
 * ```ts
 * notify("success", "User created successfully");
 * notify("error", "Failed to fetch data", { description: "Server responded with 500" });
 * ```
 *
 * Exports:
 * - `notify`: The main utility function to trigger toasts programmatically.
 */

import type { NotifyOptions, NotifyType } from "@/types/notify";
import { toast } from "sonner";

const notify = (
  type: NotifyType,
  text: string,
  options: NotifyOptions = {}
): void => {
  const { description, ...rest } = options;

  switch (type) {
    case "success":
      toast.success(text, { ...rest, description });
      break;
    case "warning":
      toast.warning(text, { ...rest, description });
      break;
    case "error":
      toast.error(text, { ...rest, description });
      break;
    case "description":
      toast.message(text, { ...rest, description });
      break;
    default:
      toast(text, { ...rest, description }); // fallback
      break;
  }
};

export { notify };
