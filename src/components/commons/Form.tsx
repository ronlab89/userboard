import Plus from "@/icons/Plus";
import Button from "@/components/commons/Button";
import Input from "@/components/commons/Input";
import { useEffect, useState } from "react";
import { createUser } from "@/services/user.service";
import { useLoadingStore } from "@/store/loading.store";
import { useUserStore } from "@/store/user.store";

const Form = () => {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const users = useUserStore((state) => state.users);
  const setUsers = useUserStore((state) => state.setUsers);
  const loading = useLoadingStore((state) => state.loading);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const create = () => {
    createUser({
      setLoading,
      name,
      surname,
      email,
      users,
      setUsers,
    });
  };

  const resetForm = () => {
    setName("");
    setSurname("");
    setEmail("");
  };

  useEffect(() => {
    resetForm();
  }, [users, loading?.createUser]);

  return (
    <form className="p-4 md:p-5">
      <div className="grid gap-4 mb-4 grid-cols-2">
        <Input
          id="name"
          name="name"
          label="Nombre"
          placeholder="Escribe el primer nombre"
          required={true}
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <Input
          id="surname"
          name="surname"
          label="Apellido"
          placeholder="Escribe el primer apellido"
          required={true}
          type="text"
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />

        <Input
          id="email"
          name="email"
          label="Email"
          placeholder="Escribe el correo electrónico"
          required={true}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <Button
        text="Agregar usuario"
        icon={<Plus width={20} height={20} styles="" />}
        type="button"
        method={() => create()}
      />
    </form>
  );
};

export default Form;
