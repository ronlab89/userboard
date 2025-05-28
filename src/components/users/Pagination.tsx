import { usePaginationStore } from "@/store/pagination.store";

const Pagination = () => {
  const currentPage = usePaginationStore((state) => state.currentPage);
  const rowsPerPage = usePaginationStore((state) => state.rowsPerPage);
  const totalPages = usePaginationStore((state) => state.totalPages);
  const totalUsers = usePaginationStore((state) => state.totalUsers);
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);
  const setRowsPerPage = usePaginationStore((state) => state.setRowsPerPage);
  const setTotalPages = usePaginationStore((state) => state.setTotalPages);
  return (
    <div className="flex justify-between items-center mt-4 text-sm">
      <div>
        <label htmlFor="rowsPerPage" className="mr-2">
          Filas por página:
        </label>
        <select
          id="rowsPerPage"
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(Number(e.target.value));
            setCurrentPage(1);
            setTotalPages(Math.ceil(totalUsers / rowsPerPage));
          }}
          className="border rounded p-1 bg-white dark:bg-gray-800"
        >
          <option value={5}>5</option>
          <option value={7}>7</option>
          <option value={10}>10</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Anterior
        </button>

        <span>
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Pagination;
