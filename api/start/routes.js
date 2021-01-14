'use strict'

/*
|--------------------------------------------------------------------------
| Routes
  Existen 2 grupos de rutas: Las que necesitan autenticación del usuario y las que no. TOMAR MUY EN CUENTA ESTO
  Dentro del grupo de las que necesitan autenticación se debe especificar el middleware para verificar si el
  usuario(autenticado) tiene el permiso para acceder a esa ruta. Ejemplo: .middleware('verifyPermission:1')
  El número 1 indica el permiso que debe tener para acceder a esa ruta
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return {
    greeting: 'Hello world in JSON'
  }
})

const addPrefixToGroup = group => {
  // Grupo para rutas con prefijo /api/
  group.prefix("api");
  return group;
};


addPrefixToGroup(
  Route.group(() => {
    // Insertar rutas sin protección de autenticación aquí
    Route.post("login", "UserController.login");
    Route.post("register", "UserController.register")
    Route.get("validate_email/:email", "UserController.validateEmail")

    Route.get("plans", "PlanController.index")
    Route.get('productos_img/:file', 'UploadController.getFileByDirectoryProductos')
    Route.get('necesidad_img/:file', 'UploadController.getFileByDirectoryNecesidad')
    Route.get("test_file/:file", "UploadController.testFile")
  })
);

addPrefixToGroup(
  Route.group(() => {
    // Insertar rutas con protección de autenticación aquí
    Route.get("categoria", "CategoriaController.index")

    Route.post('producto', 'UploadController.registrarProducto')
    Route.put('producto/:id', 'ProductoController.update')
    Route.get('producto_by_proveedor/:proveedor_id', 'ProductoController.productoByProveedor')
    Route.delete('producto/:id', 'ProductoController.destroy')
    Route.get('producto', 'ProductoController.index')
    Route.get('producto/:id', 'ProductoController.show')
    Route.get('producto_filtrado/:filtrar', 'ProductoController.productoFiltrado')

    Route.post('necesidad', 'NecesidadController.store')
    Route.get('necesidad', 'NecesidadController.index')
    Route.get('necesidad_by_user_id/:user_id', 'NecesidadController.necesidadByUserId')
    Route.get('necesidad/:id', 'NecesidadController.show')
    Route.delete('necesidad/:id', 'NecesidadController.destroy')

    Route.get("user_info", "UserController.userInfo") // metodo para obtener informacion del usuario que esta logueado
    Route.get("user_by_id/:id", "UserController.userById") // metodo para obtener informacion del usuario por id del mismo

  }).middleware("auth")
);
