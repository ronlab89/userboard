import type { Users } from "@/types/user";
/**
 * Actions and state setters used for fetching and managing users.
 */
export interface GetUserActions {
  setLoading: (key: string, value: boolean) => void;
  setUsers: (data: Users | null) => void;
  setTotalUsers: (total: number) => void;
}

/**
 * Properties required to create a new user, including loading state and user data handlers.
 */
export interface CreateUserProps {
  setLoading: (key: string, value: boolean) => void;
  name: string;
  surname: string;
  email: string;
  users: Users | null;
  setUsers: (data: Users | null) => void;
}
