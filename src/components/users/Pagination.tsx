/**
 * Pagination
 *
 * A reusable pagination component that allows users to navigate through
 * paginated data and control the number of rows per page.
 *
 * State is managed globally through a Zustand store.
 *
 * Functionality:
 * - Select the number of rows per page.
 * - Navigate between pages using "Anterior" and "Siguiente" buttons.
 * - Displays current page and total pages.
 *
 * Accessibility:
 * - Uses <label htmlFor="..."> for the rows-per-page selector.
 * - Buttons are disabled appropriately to prevent invalid navigation.
 * - Recommended to use `aria-live` to announce page changes.
 *
 * Example usage:
 * ```tsx
 * <Pagination />
 * ```
 */

import { usePaginationStore } from "@/store/pagination.store";
import { useEffect } from "react";

const Pagination = () => {
  const currentPage = usePaginationStore((state) => state.currentPage);
  const rowsPerPage = usePaginationStore((state) => state.rowsPerPage);
  const totalPages = usePaginationStore((state) => state.totalPages);
  const totalUsers = usePaginationStore((state) => state.totalUsers);
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);
  const setRowsPerPage = usePaginationStore((state) => state.setRowsPerPage);
  const setTotalPages = usePaginationStore((state) => state.setTotalPages);

  useEffect(() => {
    if (totalUsers > 0 && rowsPerPage > 0) {
      const newTotalPages = Math.ceil(totalUsers / rowsPerPage);
      if (newTotalPages !== totalPages) {
        setTotalPages(newTotalPages);
      }
    }
  }, [totalUsers, rowsPerPage, totalPages, setTotalPages]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages, setCurrentPage]);

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
            const newRowsPerPage = Number(e.target.value);
            setRowsPerPage(newRowsPerPage);
            setCurrentPage(1);
            setTotalPages(Math.ceil(totalUsers / newRowsPerPage));
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
          aria-label="Página anterior"
        >
          Anterior
        </button>

        <span aria-live="polite">
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
          aria-label="Página siguiente"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Pagination;
