# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Descripción del proyecto

Esta aplicación consiste en una tienda en línea que permite a los usuarios explorar y comprar productos. Cuenta con un carrito de compras donde los usuarios pueden ver y modificar el contenido del carrito, y calcular el precio total de los productos seleccionados. Desde la página principal se pueden ver todos los productos que contiene la tienda. La barra de navegación permite filtrar los productos por categoría. Cada ítem muestra información detallada incluyendo una imagen, un título, una descripción y la cantidad disponible en stock. Asimismo, todos los productos tienen un link para acceder al detalle, seleccionar la cantidad y agregar al carrito. Una vez que el usuario ha seleccionado todos los productos deseados y ha completado el formulario de pago, se crea una orden en una base de datos de Firebase y se proporciona un ID de orden al usuario para confirmar la compra.

### A continuación se explican los principales componentes y su función en el proyecto

**ItemList**
Este componente es responsable de mostrar una lista de productos. Recibe una lista de objetos de producto como propiedad y los renderiza utilizando el componente Item.
**ItemListContainer**
Este componente es un contenedor que se encarga de obtener la lista de productos de la base de datos y proporcionarla al componente ItemList. También maneja la paginación y el filtrado de la lista de productos.
**Item**
Este componente muestra información detallada de un producto específico, incluyendo una imagen, un título, una descripción y la cantidad disponible en stock.
**ItemDetail**
Este componente es responsable de mostrar información detallada de un producto específico. Recibe el ID del producto como propiedad y obtiene la información del producto de la base de datos. Luego renderiza la información utilizando el componente Item.
**temDetailContainer**
Este componente es un contenedor que se encarga de obtener los detalles de un producto específico de la base de datos y proporcionarlos al componente **ItemDetail**
Acepta un parámetro "id" a través de la función "useParams" de para saber qué producto se debe mostrar.
**Cart**
Este componente es el encargado de mostrar el contenido del carrito de compras y el formulario de pago al usuario. También maneja el envío del formulario y la creación de la orden en la base de datos.
**CartWidget**
Este componente muestra un icono de carrito de compras en la barra de navegación de la aplicación, y muestra la cantidad total de productos en el carrito.
**ItemCount**
Es un componente que se utiliza para mostrar la cantidad de un producto en el carrito de compras. Recibe el ID
del producto como propiedad y utiliza el contexto del carrito de compras para obtener la cantidad del producto en el carrito. Luego muestra la cantidad utilizando un elemento de contador. También proporciona botones para aumentar o disminuir la cantidad del producto en el carrito, y actualiza la cantidad en el contexto del carrito de compras al hacer clic en ellos.
**CartContext**
Es un contexto de React que proporciona acceso a la información del carrito de compras y funciones para manipular el carrito a través de la aplicación. Incluye información sobre los productos agregados al carrito, la cantidad de cada producto en el carrito y el precio total de los productos en el carrito. También incluye funciones para agregar productos al carrito, eliminar productos del carrito y vaciar el carrito completamente. Este contexto se utiliza en varios componentes de la aplicación para tener acceso a la información del carrito de compras y actualizarla de manera consistente.
**useCartContext**
Esta función proporciona un contexto para el carrito de compras, que se puede utilizar para acceder y modificar el estado del carrito desde cualquier componente hijo.

### Implementación de Firebase

Para el almacenamiento de los productos y la creación de las órdenes de compra, se ha utilizado la plataforma Firebase. Esta herramienta permite tener una base de datos en tiempo real y ha facilitado la gestión de la información necesaria para el correcto funcionamiento de la aplicación.
Se puede ver la documentación aquí https://firebase.google.com/docs

### Implementación de React Router

En este proyecto se ha utilizado React Router para permitir la navegación entre las distintas páginas de la aplicación. Con esta librería se han definido las rutas de la aplicación y se ha establecido la forma en que cada componente debe ser renderizado en función de la ruta actual.
Se puede ver la documentación aquí https://reactrouter.com/
