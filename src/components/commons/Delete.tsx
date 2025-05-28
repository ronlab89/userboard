import { useToggleStore } from "@/store/toogle.store";
import Button from "./Button";
import { useUserStore } from "@/store/user.store";
import { notify } from "@/utils/alertNotify";
import type { User } from "@/types/user";

const Delete = () => {
  const data = useToggleStore((state) => state.data) as User;
  const users = useUserStore((state) => state.users);
  const setUsers = useUserStore((state) => state.setUsers);
  const setToggleModal = useToggleStore((state) => state.setToggleModal);
  const setModalType = useToggleStore((state) => state.setModalType);
  const setData = useToggleStore((state) => state.setData);

  const handleDelete = () => {
    const filteredUsers = (users ?? []).filter((user) => user.id !== data.id);
    setUsers(filteredUsers);
    setToggleModal(false);
    setModalType("");
    setData({});
    notify("success", "¡Usuario eliminado correctamente!");
  };

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="remove-dialog-title"
      tabIndex={-1}
      className="flex flex-col gap-2 items-center justify-center w-full h-full"
    >
      <h3
        id="remove-dialog-title"
        className="flex flex-col mb-5 justify-start items-start text-sm text-center text-userboard-textlight dark:text-userboard-textdark"
        aria-live="polite"
      >
        ¿Estás seguro de que deseas eliminar el usuario?
        <span className="font-medium mt-5">
          Nombre: {String(data?.firstName ?? "")}
        </span>
        <span className="font-medium">
          Apellido: {String(data?.lastName ?? "")}
        </span>
        <span className="font-medium">Email: {String(data?.email ?? "")}</span>
      </h3>
      <p className="text-sm mb-2 font-semibold">
        Esta acción no se puede deshacer.
      </p>
      <Button
        text="Eliminar"
        icon={""}
        type={"button"}
        styles={"cursor-pointer mb-4"}
        disabled={false}
        method={handleDelete}
        ariaLabel={`Eliminar ${data?.email ?? "Usuario"} permanentemente`}
      />
    </div>
  );
};

export default Delete;
