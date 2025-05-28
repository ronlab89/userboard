# UserBoard

Una aplicación web moderna construida con **Vite + React + Zustand + TailwindCSS** para gestionar usuarios de forma eficiente y sencilla.

## 🚀 Características

- Consulta de usuarios desde una API externa
- Visualización en tabla con estilo moderno y accesible
- Filtro de usuarios activos (`status === true`)
- Agregado y eliminación de usuarios con confirmación
- Paginación (5, 7 o 10 usuarios por página)
- Gestión global de loading con Zustand
- Estilo elegante en modo claro/oscuro
- Completamente responsive

## 🖥️ Tecnologías usadas

- ⚡ [Vite](https://vitejs.dev/) – Bundler ultrarrápido
- ⚛️ [React](https://reactjs.org/) – Biblioteca de interfaz de usuario
- 📦 [Zustand](https://github.com/pmndrs/zustand) – Manejo de estado global
- 🎨 [TailwindCSS](https://tailwindcss.com/) – Estilos utilitarios modernos
- 🍞 [Sonner](https://sonner.emilkowal.ski/) – Notificaciones elegantes

## 🧱 Estructura del proyecto

```bash
src/
├── assets/                # Archivos estáticos (logo, íconos)
├── components/            # Componentes reutilizables
│   ├── users/             # Tabla y formularios de usuario
│   ├── commons/           # Loader, botones, inputs genéricos
│   └── navigation/        # Navbar y navegación
├── services/              # Peticiones a APIs (ej. userService.ts)
├── store/                 # Zustand stores (ej. loading.store.ts, user.store.ts)
├── types/                 # Tipos globales (ej. User.ts)
└── App.tsx                # Componente principal
```

## 🚀 Inicio rápido

### Requisitos

- [Node.js](https://nodejs.org/es/) (v16.13.0 o superior)
- [Yarn](https://yarnpkg.com/) (v1.22.17 o superior)

### Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/ronlab89/userboard
```

2. Instalar dependencias:

```bash
yarn install
```

3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```bash
VITE_URL_API=URL_API
```

4. Iniciar el servidor de desarrollo:

```bash
yarn dev
```

5. Acceder a la aplicación en `http://localhost:5173`.

## 🌐 Despliegue

La app está publicada en Netlify y accesible en:

👉 https://board-users.netlify.app/

## 🧠 Buenas prácticas de código

- Componentes con nombres claros y función única

- Documentación en inglés profesional (puede adaptarse a español si el equipo lo requiere)

- Tipado estricto con TypeScript (User, LoadingState, etc.)

- Código comentado solo en lugares clave (no sobrecomentar lógica trivial)

- Estilos con clases utilitarias de Tailwind (evitando CSS innecesario)

## ✅ Funcionalidades adicionales

- Modo oscuro automático con transición suave

- Accesibilidad básica (SR-only para H1, navegación por teclado)

- Carga diferida (lazy) para loader y notificaciones

- Arquitectura escalable por módulos

## 📝 Meta información

Título: UserBoard - Gestión de usuarios moderna

Descripción: Plataforma rápida, clara y funcional para visualizar, agregar y eliminar usuarios activos desde una API externa.

## 📦 API de origen

Datos obtenidos desde:
https://api.fake-rest.refine.dev/users
