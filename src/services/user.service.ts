import axios from "axios";
import type { User } from "@/types/user";
import type { CreateUserProps, GetUserActions } from "@/types/userActions";
import { notify } from "@/utils/alertNotify";

/**
 * Fetches active users from the API, updates the user list,
 * total count, and handles loading and error states.
 *
 * @param {Object} params - The parameters for fetching users.
 * @param {Function} params.setLoading - Function to toggle loading state.
 * @param {Function} params.setUsers - Function to update the users list.
 * @param {Function} params.setTotalUsers - Function to update the total number of users.
 * @returns {Promise<void>}
 */
const getUsers = async ({
  setLoading,
  setUsers,
  setTotalUsers,
}: GetUserActions): Promise<void> => {
  try {
    setLoading("users", true);
    const res = await axios({
      method: "GET",
      url: import.meta.env.VITE_URL_API,
    });
    if (res.status === 200) {
      const filteredUsers = res.data.filter((user: User) => user.status);
      setUsers(filteredUsers);
      setTotalUsers(filteredUsers.length);
      notify("success", "Usuarios obtenidos correctamente");
    }
  } catch (error) {
    // console.log(error);
    notify("error", "Error al obtener usuarios");
  } finally {
    setLoading("users", false);
  }
};

/**
 * Simulates the creation of a new user locally, updates the user list,
 * and manages the loading and notification states.
 *
 * @param {Object} params - The parameters for creating a user.
 * @param {Function} params.setLoading - Function to toggle loading state.
 * @param {string} params.name - First name of the new user.
 * @param {string} params.surname - Last name of the new user.
 * @param {string} params.email - Email of the new user.
 * @param {Array<User>} [params.users] - Current list of users.
 * @param {Function} params.setUsers - Function to update the users list.
 * @returns {Promise<void>}
 */
const createUser = async ({
  setLoading,
  name,
  surname,
  email,
  users,
  setUsers,
}: CreateUserProps): Promise<void> => {
  try {
    setLoading("createUser", true);
    const newUser = {
      id: Date.now(),
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
    //   console.log(error);
    notify("error", "Error al crear usuario");
  } finally {
    setLoading("createUser", false);
  }
};

export { getUsers, createUser };
