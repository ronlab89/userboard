/**
 * NotifyType
 *
 * Represents the predefined types of toast notifications supported by the `notify` utility.
 *
 * - "success": Indicates a successful operation.
 * - "warning": Indicates a non-critical issue or cautionary message.
 * - "error": Indicates a failure or critical issue.
 * - "description": Used to show a message with an optional description (uses `toast.message`).
 */
export type NotifyType = "success" | "warning" | "error" | "description";

export interface NotifyOptions {
  description?: string;
  [key: string]: unknown; // Allows additional props like duration, style, etc.
}
