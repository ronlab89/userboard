import type { Users } from "@/types/user";

export interface GetUserActions {
  setLoading: (key: string, value: boolean) => void;
  setUsers: (data: Users | null) => void;
  setTotalUsers: (total: number) => void;
}
