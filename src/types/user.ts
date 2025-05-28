// Avatar object used for storing user-uploaded profile pictures
export interface Avatar {
  name: string;
  percent: number;
  size: number;
  status: "done" | "uploading" | "error" | string;
  type: string;
  uid: string;
  url: string;
}

// User object representing an app user
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: boolean;
  birthday: string; // ISO string format, e.g. "2025-04-15T23:36:39.575Z"
  skills: string[];
  avatar: Avatar[];
}

// List of users
export type Users = User[];
