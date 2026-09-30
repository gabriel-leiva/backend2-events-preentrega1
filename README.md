# Backend2 Events - Plataforma de Eventos e Inscripciones

API REST desarrollada con Node.js, Express, MongoDB y Mongoose para una plataforma de eventos e inscripciones.

Este proyecto corresponde a la Pre-entrega 1 del curso Programación Backend II y tiene como objetivo establecer una arquitectura base organizada por capas, preparada para incorporar nuevas funcionalidades en entregas posteriores.

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- JavaScript con módulos ESM

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/gabriel-leiva/backend2-events-preentrega1.git
```

Ingresar al proyecto:

```bash
cd backend2-events-preentrega1
```

Instalar las dependencias:

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto tomando como referencia `.env.example`.

Variables utilizadas:

```env
PORT=8080
NODE_ENV=development
MONGO_URL=
JWT_SECRET=
```

Descripción:

- `PORT`: puerto utilizado por el servidor.
- `NODE_ENV`: entorno de ejecución.
- `MONGO_URL`: URL de conexión a MongoDB.
- `JWT_SECRET`: variable preparada para futuras funcionalidades de autenticación.

El archivo `.env` no debe subirse al repositorio.

## Ejecución

Para iniciar el servidor:

```bash
npm start
```

Para ejecutarlo en modo desarrollo:

```bash
npm run dev
```

Por defecto el servidor se ejecuta en:

```text
http://localhost:8080
```

## Base de datos

El proyecto utiliza MongoDB junto con Mongoose.

La conexión se realiza desde:

```text
src/config/database.js
```

La URL de conexión se obtiene mediante la variable de entorno:

```text
MONGO_URL
```

## Arquitectura

El proyecto está organizado utilizando separación por capas.

El flujo principal para el recurso Events es:

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
DAO
  ↓
Model
  ↓
MongoDB
```

Cada capa tiene una responsabilidad específica:

- `routes`: define las rutas HTTP.
- `controllers`: maneja las requests y responses.
- `services`: contiene la lógica de negocio.
- `repositories`: abstrae el acceso a datos.
- `dao`: realiza las operaciones con los modelos.
- `models`: define los esquemas de Mongoose.
- `middlewares`: contiene lógica reutilizable de Express.
- `config`: centraliza configuraciones.
- `utils`: preparada para funciones auxiliares.

## Estructura del proyecto

```text
backend2-events-preentrega1/
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── config/
│   │   ├── config.js
│   │   └── database.js
│   │
│   ├── routes/
│   │   ├── health.router.js
│   │   ├── events.router.js
│   │   └── sessions.router.js
│   │
│   ├── controllers/
│   │   ├── health.controller.js
│   │   ├── events.controller.js
│   │   └── sessions.controller.js
│   │
│   ├── services/
│   │   └── events.service.js
│   │
│   ├── repositories/
│   │   └── events.repository.js
│   │
│   ├── dao/
│   │   └── events.dao.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Event.js
│   │   ├── Category.js
│   │   └── Registration.js
│   │
│   ├── middlewares/
│   │   └── error.middleware.js
│   │
│   └── utils/
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Rutas disponibles

### GET `/api/health`

Permite verificar que el servidor se encuentra activo.

Respuesta esperada:

```json
{
  "status": "ok",
  "message": "Servidor activo"
}
```

### GET `/api/events`

Devuelve el listado de eventos almacenados.

Si no existen eventos:

```json
{
  "status": "success",
  "payload": []
}
```

El flujo de esta ruta utiliza las capas:

```text
Route → Controller → Service → Repository → DAO → Model
```

### GET `/api/sessions`

Ruta inicial preparada para el recurso sessions.

Respuesta:

```json
{
  "status": "success",
  "message": "Estructura de sessions disponible"
}
```

En esta etapa todavía no se implementa lógica de autenticación.

## Manejo de errores

El proyecto utiliza un middleware global para centralizar el manejo de errores:

```text
src/middlewares/error.middleware.js
```

Las rutas y controladores pueden delegar los errores mediante:

```javascript
next(error);
```

El middleware devuelve una respuesta JSON consistente.

## Archivos excluidos

El archivo `.gitignore` excluye:

```text
node_modules/
.env
```

Esto evita subir dependencias locales o credenciales privadas al repositorio.