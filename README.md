# Prueba técnica MERN
### Introducción
Esta prueba fue desarrollada con el objetivo de demostrar la capacidades técnicas al momento de desarrollar, cumplir los requerimientos establecidos en dicha prueba y resolución de dificultades a nivel técnico.

### Stack utilizado para la prueba

 - MongoDB
 - ExpressJS
 - ReactJS + Vite
 - NodeJs

### Instalación de las dependencias

    npm install // tanto en las carpetas del frontend como del backend

### Ejecución del proyecto

    npm run start //Backend
    npm run dev //Frontend

### Justificación de las elecciones técnicas
Se utilizó en el backend Javascript normal debido que es un lenguaje de tipado dinámico no se necesitaba en tal caso trabajar con tipados. Pude usar también Typescript pero el detalle con Typescript es que toca hacer hacer una configuración adicional para que al compilar transpile código de JS y al mismo tiempo se ejecute el programa. Luego utilice para el manejo de base de datos Mongoose el cual se conecta a mongodb.

En el frontend utilice React + vite y nivel de librerías UI utilice bootstrap debido que es menos complejo de configurar ya que simplemente al inicializar se usa en el index.html los CDN tanto del css como js.

### Estructura del proyecto

```
frontend/
│── src/
│   ├── components/
|       ├── layout/
|       	├── Navbar.tsx
|       ├── paginas/
|       	├── Articulos.tsx
|       	├── PreciosEspeciales.tsx
|       	├── Subida.tsx
|       ├── Modal.tsx
|       ├── ModalEdit.tsx
│   ├── modelos/
|       ├── preciosEspeciales.ts
|       ├── productos.ts
|       ├── usuario.ts
│   ├── servicios/
|       ├── preciosEspeciales.ts
|       ├── productos.ts
|       ├── usuario.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
│── public/
│── package.json
│── README.md
```

```
backend/
│── src/
│   ├── configDb/
│   	├── configMd.js
│   ├── endpoints/
│   	├── auth.js
│   	├── precios-especiales-endpoints.js
│   	├── productos-endpoints.js
│   ├── modelos/
│   	├── precios-especiales.js
│   	├── productos.js
│   	├── usuario.js
│   ├── index.js
│── package.json
│── README.md
```
