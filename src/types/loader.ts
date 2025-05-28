/**
 * Represents a collection of loading states keyed by string identifiers.
 *
 * Each key corresponds to a specific process or action, and the value is a boolean
 * indicating whether that process is currently loading (`true`) or not (`false`).
 * A value of `undefined` means the loading state for that key is not set.
 */
export interface LoadingState {
  [key: string]: boolean | undefined;
}

/**
 * Props for a loader component.
 *
 * - type: Specifies the loader style or category (e.g., "pulse", "spinner").
 * - text: Descriptive text to display alongside the loader.
 */
export interface LoaderProps {
  type: string;
  text: string;
}
