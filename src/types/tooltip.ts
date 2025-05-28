/**
 * Props interface for a Tooltip component.
 *
 * Properties:
 * - content: string — The text or content displayed inside the tooltip.
 * - id: string — A unique identifier for the tooltip element.
 * - top?: string — Optional CSS value to position the tooltip from the top.
 * - left?: string — Optional CSS value to position the tooltip from the left.
 */

export interface TooltipProps {
  content: string;
  id: string;
  top?: string;
  left?: string;
}
