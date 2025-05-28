/**
 * Users
 *
 * Main component for managing the user board in the application.
 *
 * Functionality:
 * - Fetches and displays a list of users using a `DataTable` component.
 * - Handles loading state, user state, and pagination using Zustand stores.
 * - Includes UI controls to reload the user list and open a modal to add a new user.
 *
 * State Management:
 * - `useUserStore`: Manages the list of users (`users`, `setUsers`).
 * - `useLoadingStore`: Manages loading state (`setLoading`).
 * - `usePaginationStore`: Manages pagination (`setTotalUsers`, `resetPagination`).
 * - `useToggleStore`: Manages UI toggles like modals and tooltips.
 *
 * Side Effects:
 * - Uses `useEffect` to trigger fetching users on initial render or when `reload` is set to `true`.
 * - Resets pagination whenever a new fetch occurs.
 *
 * Components Used:
 * - `DataTable`: Renders the user list.
 * - `Pagination`: Handles pagination controls.
 * - `Tooltip`: Displays tooltips for action icons.
 * - `Add`, `Reload`: Icon components for UI actions.
 *
 * Example Usage:
 * ```tsx
 * <Users />
 * ```
 */

import { useEffect, useState } from "react";
import { useUserStore } from "@/store/user.store";
import { useLoadingStore } from "@/store/loading.store";
import { useToggleStore } from "@/store/toogle.store";
import { usePaginationStore } from "@/store/pagination.store";
import { getUsers } from "@/services/user.service";
import DataTable from "@/components/users/DataTable";
import Tooltip from "@/components/commons/Tooltip";
import Pagination from "@/components/users/Pagination";
import Add from "@/icons/Add";
import Reload from "@/icons/Reload";

const Users = () => {
  const users = useUserStore((state) => state.users);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const setUsers = useUserStore((state) => state.setUsers);
  const setTotalUsers = usePaginationStore((state) => state.setTotalUsers);
  const resetPagination = usePaginationStore((state) => state.resetPagination);
  const setTooltip = useToggleStore((state) => state.setTooltip);
  const setToggleModal = useToggleStore((state) => state.setToggleModal);
  const setModalType = useToggleStore((state) => state.setModalType);

  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (users?.length === 0 || reload) {
      getUsers({
        setLoading,
        setUsers,
        setTotalUsers,
      });
      resetPagination();
    }
    setReload(false);
  }, [reload]);

  return (
    <article className="max-w-3xl mx-auto">
      <div className="w-full flex justify-between items-center">
        <h2 className="mb-2">Usuarios: {users?.length}</h2>
        <div className="inline-flex items-center gap-4 relative">
          <span
            className="relative"
            data-tooltip-target="reload-user"
            onMouseEnter={() => setTooltip(true, "reload-user")}
            onMouseLeave={() => setTooltip(false, "")}
            onClick={() => {
              setReload(true);
            }}
          >
            <Reload
              width={18}
              height={18}
              styles="cursor-pointer hover:text-userboard-accent transition-colors"
            />
            <Tooltip
              content="Consultar usuarios"
              id="reload-user"
              top="top-[-50px]"
              left="left-[-35px]"
            />
          </span>
          <span
            className="relative"
            data-tooltip-target="add-user"
            onMouseEnter={() => setTooltip(true, "add-user")}
            onMouseLeave={() => setTooltip(false, "")}
            onClick={() => {
              setToggleModal(true);
              setModalType("add-user");
            }}
          >
            <Add
              width={24}
              height={24}
              styles="cursor-pointer hover:text-userboard-accent transition-colors"
            />
            <Tooltip
              content="Agregar usuario"
              id="add-user"
              top="top-[-50px]"
              left="left-[-25px]"
            />
          </span>
        </div>
      </div>
      <div className="w-full min-h-[60vh] h-[65vh] max-h-full overflow-x-hidden overflow-y-auto">
        <DataTable />
      </div>
      <Pagination />
    </article>
  );
};

export default Users;
