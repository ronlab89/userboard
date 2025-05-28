export type NotifyType = "success" | "warning" | "error" | "description";

export interface NotifyOptions {
  description?: string;
  [key: string]: unknown; // Para props adicionales
}
