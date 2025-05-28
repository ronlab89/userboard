import { useEffect } from "react";

import { useUserStore } from "@/store/user.store";
import { useLoadingStore } from "@/store/loading.store";
import { getUsers } from "@/services/user.service";
import DataTable from "@/components/users/DataTable";
import { usePaginationStore } from "@/store/pagination.store";
import Pagination from "./Pagination";
import Add from "@/icons/Add";
import Tooltip from "@/components/commons/Tooltip";
import { useToggleStore } from "@/store/toogle.store";

const Users = () => {
  const users = useUserStore((state) => state.users);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const setUsers = useUserStore((state) => state.setUsers);
  const setTotalUsers = usePaginationStore((state) => state.setTotalUsers);
  const resetPagination = usePaginationStore((state) => state.resetPagination);
  const setTooltip = useToggleStore((state) => state.setTooltip);

  useEffect(() => {
    if (users?.length === 0) {
      getUsers({
        setLoading,
        setUsers,
        setTotalUsers,
      });
      resetPagination();
    }
  }, []);

  return (
    <article className="max-w-3xl mx-auto">
      <div className="w-full flex justify-between items-center">
        <h2 className="mb-2">Usuarios: {users?.length}</h2>
        <div className="inline-flex items-center relative">
          <span
            className="relative"
            data-tooltip-target="add-user"
            onMouseEnter={() => setTooltip(true, "add-user")}
            onMouseLeave={() => setTooltip(false, "")}
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
