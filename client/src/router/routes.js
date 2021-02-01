
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Administrador
      { path: '/inicio_administrador', component: () => import('pages/admin/Inicio.vue') },
      { path: '/proveedores', component: () => import('pages/admin/Proveedores.vue') },
      { path: '/clientes', component: () => import('pages/admin/Clientes.vue') },
      { path: '/proveedores_pendientes', component: () => import('pages/admin/Pendientes.vue') },
      { path: '/descripcionusuario/:id', component: () => import('pages/admin/DescripcionUsuario.vue') },
      // Proveedor
      { path: '/inicio_proveedor', component: () => import('pages/proveedor/Inicio.vue') },
      { path: '/reportes_proveedor', component: () => import('pages/proveedor/Reportes.vue') },
      { path: '/productos', component: () => import('pages/proveedor/Productos.vue') },
      { path: '/registroproductos', component: () => import('pages/proveedor/RegistroProductos.vue') },
      { path: '/editar_producto/:id', component: () => import('pages/proveedor/RegistroProductos.vue') },
      { path: '/descripcionsolicitud/:id', component: () => import('pages/proveedor/DescripcionNecesidad.vue') },
      // Cliente
      { path: '/inicio_cliente', component: () => import('pages/cliente/Inicio.vue') },
      { path: '/reportes_cliente', component: () => import('pages/cliente/Reportes.vue') },
      { path: '/solicitudes', component: () => import('pages/cliente/Necesidades.vue') },
      { path: '/registronecesidades', component: () => import('pages/cliente/RegistroNecesidades.vue') },
      { path: '/editar_solicitud/:id', component: () => import('pages/cliente/RegistroNecesidades.vue') },
      { path: '/tienda/:id', component: () => import('pages/cliente/Tienda.vue') },
      { path: '/descripcionproducto/:id', component: () => import('pages/cliente/DescripcionProducto.vue') },
      // Generales
      { path: '/chat/:id', component: () => import('pages/Chat.vue') },
      { path: '/mis_chats', component: () => import('pages/AllChats.vue') },
      { path: '/mis_cotizaciones', component: () => import('pages/MisCotizaciones.vue') },
      { path: '/cotizacion/:id/:necesidad_id', component: () => import('pages/VerCotizacion.vue') },
      { path: '/filtrar_categorias/:id', component: () => import('pages/FiltradoCategorias.vue') }

    ]
  },
  { path: '/login', component: () => import('pages/Login.vue') },
  { path: '/registro', component: () => import('pages/Registro.vue') },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '*',
    redirect: '/login'
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
