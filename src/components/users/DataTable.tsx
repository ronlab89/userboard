import RemoveUser from "@/icons/RemoveUser";
import { usePaginationStore } from "@/store/pagination.store";
import { useToggleStore } from "@/store/toogle.store";
import { useUserStore } from "@/store/user.store";
import { useEffect } from "react";

const DataTable = () => {
  const users = useUserStore((state) => state.users);
  const currentPage = usePaginationStore((state) => state.currentPage);
  const rowsPerPage = usePaginationStore((state) => state.rowsPerPage);
  const totalUsers = usePaginationStore((state) => state.totalUsers);
  const totalPages = usePaginationStore((state) => state.totalPages);
  const setTotalPages = usePaginationStore((state) => state.setTotalPages);
  const setToggleModal = useToggleStore((state) => state.setToggleModal);
  const setModalType = useToggleStore((state) => state.setModalType);
  const setData = useToggleStore((state) => state.setData);

  const paginatedUsers = users?.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  useEffect(() => {
    setTotalPages(Math.ceil(totalUsers / rowsPerPage));
  }, [users]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-userboard-textlight dark:text-userboard-textdark">
        <thead className="text-xs text-userboard-accent uppercase bg-userboard-bgdark/90 dark:bg-userboard-bglight/90">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Apellido
            </th>
            <th scope="col" className="px-6 py-3">
              Correo electrónico
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers?.map((user) => (
            <tr
              key={user?.id}
              className="bg-userboard-bgdark/10 border-b dark:bg-userboard-bglight/10 dark:border-userboard-borderdark border-userboard-borderlight hover:bg-userboard-accent/50 dark:hover:bg-userboard-accent/50"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                {user?.firstName}
              </th>
              <td className="px-6 py-4">{user?.lastName}</td>
              <td className="px-6 py-4">{user?.email}</td>
              <td className="px-6 py-4 text-right">
                <span
                  onClick={() => {
                    setToggleModal(true);
                    setModalType("delete-user");
                    setData({ ...user });
                  }}
                >
                  <RemoveUser
                    width={24}
                    height={24}
                    styles="cursor-pointer hover:text-userboard-textdark dark:hover:text-userboard-textlight transition-colors"
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
