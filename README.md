# BookHub – Frontend

Interfaz web del catálogo de libros BookHub. Consume la API REST del backend para mostrar, buscar y filtrar libros.

> Backend (Spring Boot + PostgreSQL): `https://github.com/Ailtonsky/books-api`

---

## Funcionalidades

- Catálogo de libros obtenido desde la API.
- Filtro por categoría (las categorías también vienen de la API).
- Botón **"Cargar más"** que pide la siguiente página al backend.
- Inicio de sesión con usuarios ADMIN y USER; la sesión se mantiene al recargar.
- Diseño responsive para celular, tablet y escritorio.
- Estructura basada en el wireframe de la prueba: header, hero, categorías, catálogo, galería, autores destacados y footer.

---

## Tecnologías

| Tecnología            | Uso                                         |
| --------------------- | ------------------------------------------- |
| React 19 + TypeScript | Interfaz y tipado                           |
| Vite                  | Servidor de desarrollo y build              |
| Tailwind CSS v4       | Estilos (utility-first con tokens de color) |
| React Router          | Navegación entre páginas                    |
| pnpm                  | Gestor de paquetes                          |

---

## Requisitos

- **Node.js 20** o superior (`node -v`)
- **pnpm** (`npm install -g pnpm` o `corepack enable`)
- El **backend corriendo** en `http://localhost:8080` (ver su README)

---

## Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd <carpeta-del-proyecto>

# 2. Instalar dependencias
pnpm install

# 3. Configurar la variable de entorno
cp .env.example .env          # PowerShell: Copy-Item .env.example .env

# 4. Iniciar el servidor de desarrollo
pnpm dev
```

La aplicación queda disponible en `http://localhost:5173`.

> Este proyecto usa **pnpm**. No uses `npm install`, porque generaría un `package-lock.json` distinto al `pnpm-lock.yaml`.

### Otros comandos

```bash
pnpm build     # compila para producción en dist/
pnpm preview   # sirve la versión compilada
```

---

## Variables de entorno

| Variable       | Descripción                    | Ejemplo                        |
| -------------- | ------------------------------ | ------------------------------ |
| `VITE_API_URL` | URL base de la API del backend | `http://localhost:8080/api/v1` |

Vite solo expone al código las variables con el prefijo `VITE_`. Todo lo que está en este archivo termina en el JavaScript que descarga el navegador, por eso aquí **no** se guardan secretos.

Si cambias el `.env`, reinicia `pnpm dev`.

---

## Usuarios de prueba

Los usuarios los crea el backend al arrancar, con las credenciales definidas en **su** `.env` (`ADMIN_USERNAME` / `ADMIN_PASSWORD` y `USER_USERNAME` / `USER_PASSWORD`).

---

## Estructura del proyecto

```
src/
├── api/          Llamadas al backend (libros, categorías, login)
├── types/        Tipos TypeScript que reflejan las respuestas de la API
├── context/      AuthContext: sesión del usuario
├── components/
│   ├── layout/   Header y Footer
│   ├── home/     Hero, CategoryCards, Gallery, FeaturedAuthors
│   └── books/    BookGrid y BookCard
├── pages/        HomePage y LoginPage
├── App.tsx       Rutas y estructura general
└── main.tsx      Punto de entrada
```

---

## Endpoints que consume

| Método | Endpoint                   | Uso                          |
| ------ | -------------------------- | ---------------------------- |
| `GET`  | `/books?page=&categoryId=` | Catálogo paginado y filtrado |
| `GET`  | `/categories`              | Lista de categorías          |
| `POST` | `/auth/login`              | Inicio de sesión             |

---

## Solución de problemas

| Problema                                     | Causa probable                                                                                        |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Error de CORS en la consola                  | El backend no permite `http://localhost:5173`; revisa `CORS_ALLOWED_ORIGINS` en el `.env` del backend |
| `Unexpected token '<'` o URL con `undefined` | Falta `VITE_API_URL` en el `.env` o no se reinició `pnpm dev`                                         |
| El catálogo aparece vacío o con error        | El backend o la base de datos no están corriendo                                                      |
