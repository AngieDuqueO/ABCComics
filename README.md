# ABC Comics

En este proyecto, se consumio la API de Comic Vine, en donde se consulta informacion como comics, personajes y creadores, presentado mediante grilla
y listas.

## Instalación

### Servidor

1. Clona este repositorio.
2. Navega al directorio del servidor, mediante:
   cd server/
  
3. Instala las dependencias del servidor, mediante:
   npm install
  

### Cliente

1. Navega al directorio del cliente, mediante:
   cd client/
  
2. Instala las dependencias del cliente, mediante:
   npm install

## Configuración

1. Abre el archivo `server/server.js` y ajusta la configuración según sea necesario.
2. Abre el archivo `client/package.json` y asegúrate de que la clave `"proxy"` esté configurada correctamente para apuntar al servidor backend.

## Uso

### Ejecutar en Desarrollo

#### Servidor

Desde el directorio `server/`, ejecuta:
npm run dev


Esto iniciará el servidor en modo de desarrollo utilizando Nodemon.

#### Cliente

Desde el directorio `client/`, ejecuta:
npm start


Esto iniciará la aplicación cliente en modo de desarrollo.

## Scripts Disponibles

En el directorio del cliente (`client/`), puedes ejecutar:

- `npm start`: Inicia la aplicación en modo de desarrollo.

En el directorio del servidor (`server/`), puedes ejecutar:

- `npm start`: Inicia el servidor en producción.
- `npm run dev`: Inicia el servidor en modo de desarrollo con Nodemon.

## Dependencias Principales

### Servidor

- **express**: Framework web para Node.js.
- **axios**: Cliente HTTP para hacer peticiones a otros servicios.

### Cliente

- **react**: Biblioteca JavaScript para construir interfaces de usuario.
- **react-router-dom**: Enrutamiento para aplicaciones React.
- **axios**: Cliente HTTP para hacer peticiones al servidor.
- **bootstrap** y **react-bootstrap**: Framework CSS y componentes para React.
- **react-icons**: Iconos personalizables para aplicaciones React.

## Licencia

ISC License (ISC)

---

Asegúrate de ajustar los nombres de los directorios y los comandos según sea necesario para reflejar la estructura real de tu proyecto. Esto proporcionará a cualquier persona que use tu proyecto una guía clara sobre cómo instalar, configurar y ejecutar tanto el servidor como el cliente.
