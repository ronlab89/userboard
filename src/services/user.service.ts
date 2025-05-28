import type { User } from "@/types/user";
import type { CreateUserProps, GetUserActions } from "@/types/userActions";
import { notify } from "@/utils/alertNotify";
import axios from "axios";

const getUsers = async ({
  setLoading,
  setUsers,
  setTotalUsers,
}: GetUserActions) => {
  try {
    setLoading("users", true);
    const res = await axios({
      method: "GET",
      url: import.meta.env.VITE_URL_API,
    });
    console.log({ res });
    if (res.status === 200) {
      const filteredUsers = res.data.filter((user: User) => user.status);
      console.log({ filteredUsers });
      setUsers(filteredUsers);
      setTotalUsers(filteredUsers.length);
      notify("success", "Usuarios obtenidos correctamente");
    }
  } catch (error) {
    console.log(error);
    notify("error", "Error al obtener usuarios");
  } finally {
    setLoading("users", false);
  }
};

const createUser = async ({
  setLoading,
  name,
  surname,
  email,
  users,
  setUsers,
}: CreateUserProps) => {
  try {
    setLoading("createUser", true);
    const newUser = {
      id: (users ? users.length : 0) + 1 * 1000,
      firstName: name,
      lastName: surname,
      email: email,
      status: true,
      birthday: "",
      skills: [],
      avatar: [],
    };
    setUsers([...(users ?? []), newUser]);
    notify("success", "Usuario creado correctamente");
  } catch (error) {
    console.log(error);
  } finally {
    setLoading("createUser", false);
  }
};

export { getUsers, createUser };
