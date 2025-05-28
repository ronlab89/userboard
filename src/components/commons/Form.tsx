/**
 * Form
 *
 * A user creation form component that allows adding a new user to the system.
 *
 * Functionality:
 * - Contains three controlled inputs: `name`, `surname`, and `email`.
 * - On clicking the submit button, the `createUser` service is called with the form data and relevant store methods.
 * - Automatically resets the form fields when the users list or the `loading.createUser` state changes.
 *
 * State Management:
 * - Local State:
 *   - `name`, `surname`, `email`: Controlled inputs for the form fields.
 * - Global Stores:
 *   - `useUserStore`:
 *     - `users`: Current list of users.
 *     - `setUsers`: Updates the list after a new user is added.
 *   - `useLoadingStore`:
 *     - `setLoading`: Tracks the loading state for user creation.
 *     - `loading.createUser`: Used to detect completion and trigger form reset.
 *
 * Components Used:
 * - `Input`: Reusable input component with label, placeholder, validation, and binding support.
 * - `Button`: Triggers the `create` function and shows an icon (Plus).
 *
 * Accessibility:
 * - Labels are associated with inputs via `id` and `htmlFor`.
 * - All fields are marked as `required` for validation.
 *
 * Example Usage:
 * ```tsx
 * <Form />
 * ```
 */

import { useEffect, useState } from "react";
import { useLoadingStore } from "@/store/loading.store";
import { useUserStore } from "@/store/user.store";
import { createUser } from "@/services/user.service";
import Button from "@/components/commons/Button";
import Input from "@/components/commons/Input";
import Plus from "@/icons/Plus";
import FormError from "./FormError";

const Form = () => {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const users = useUserStore((state) => state.users);
  const setUsers = useUserStore((state) => state.setUsers);
  const loading = useLoadingStore((state) => state.loading);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    name: false,
    surname: false,
    email: false,
  });

  // Valida un campo específico
  const validateField = (field: keyof typeof errors, value: string) => {
    const isValid = value.trim() !== "";
    setErrors((prev) => ({ ...prev, [field]: !isValid }));
    return isValid;
  };

  // Valida todo el formulario antes de enviar
  const validateForm = () => {
    const nameValid = validateField("name", name);
    const surnameValid = validateField("surname", surname);
    const emailValid = validateField("email", email);

    return nameValid && surnameValid && emailValid;
  };

  const create = () => {
    if (!validateForm()) return;
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
    setErrors({ name: false, surname: false, email: false });
  };

  // Limpiar errores si se empieza a escribir en un campo vacío
  const handleInputChange = (
    field: keyof typeof errors,
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string
  ) => {
    setter(value);
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  useEffect(() => {
    resetForm();
  }, [users, loading?.createUser]);

  return (
    <form className="p-4 md:p-5">
      <div
        className={`grid ${
          errors.name || errors.surname || errors.email ? "gap-0" : "gap-4"
        } mb-4 grid-cols-2`}
      >
        <Input
          id="name"
          name="name"
          label="Nombre"
          placeholder="Escribe el primer nombre"
          required={true}
          type="text"
          value={name}
          onChange={(e) => {
            handleInputChange("name", setName, e.target.value);
          }}
        />
        {errors.name && <FormError />}
        <Input
          id="surname"
          name="surname"
          label="Apellido"
          placeholder="Escribe el primer apellido"
          required={true}
          type="text"
          value={surname}
          onChange={(e) => {
            handleInputChange("surname", setSurname, e.target.value);
          }}
        />
        {errors.surname && <FormError />}
        <Input
          id="email"
          name="email"
          label="Email"
          placeholder="Escribe el correo electrónico"
          required={true}
          type="email"
          value={email}
          onChange={(e) => {
            handleInputChange("email", setEmail, e.target.value);
          }}
        />
        {errors.email && <FormError />}
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
