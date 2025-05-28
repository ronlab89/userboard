/**
 * Modal
 *
 * A reusable modal component for user interactions such as adding or deleting a user.
 *
 * Functionality:
 * - Conditionally renders different content (`Form` or `Delete`) based on the current modal type.
 * - Displays a dark translucent backdrop that closes when toggled off.
 * - Contains a close button that resets the modal type and visibility state.
 *
 * State Management:
 * - `useToggleStore`:
 *   - `toggleModal`: Boolean state to show/hide the modal.
 *   - `modalType`: String indicating which content to display (`add-user` or `delete-user`).
 *   - `setToggleModal`: Function to toggle the modal visibility.
 *   - `setModalType`: Function to reset the modal type.
 *
 * Components Used:
 * - `Form`: Rendered when `modalType` is `"add-user"`.
 * - `Delete`: Rendered when `modalType` is `"delete-user"`.
 * - `Close`: Icon used for closing the modal.
 *
 * Accessibility:
 * - Uses `aria-hidden` to indicate modal visibility for assistive technologies.
 *
 * Example Usage:
 * ```tsx
 * <Modal />
 * ```
 */

import { useToggleStore } from "@/store/toogle.store";
import Form from "@/components/commons/Form";
import Delete from "@/components/commons/Delete";
import Close from "@/icons/Close";

const Modal = () => {
  const toggleModal = useToggleStore((state) => state.toggleModal);
  const setToggleModal = useToggleStore((state) => state.setToggleModal);
  const modalType = useToggleStore((state) => state.modalType);
  const setModalType = useToggleStore((state) => state.setModalType);
  return (
    // <!-- Main modal -->
    <div
      id="crud-modal"
      tabIndex={-1}
      aria-hidden={!toggleModal ? "false" : "true"}
      className={`${
        toggleModal ? "" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 bg-userboard-bgdark/60 dark:bg-userboard-bglight/60 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b mb-2 rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {modalType === "add-user"
                ? "Crear nuevo usuario"
                : "Eliminar usuario"}
            </h3>
            <button
              type="button"
              onClick={() => {
                setToggleModal(false);
                setModalType("");
              }}
              className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <Close width={14} height={14} styles="" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          {modalType === "add-user" ? (
            <Form />
          ) : modalType === "delete-user" ? (
            <Delete />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
