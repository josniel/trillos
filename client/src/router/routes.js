
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/inicio_cliente', component: () => import('pages/cliente/Inicio.vue') },
      { path: '/inicio_proveedor', component: () => import('pages/proveedor/Inicio.vue') },
      { path: '/productos', component: () => import('pages/proveedor/Productos.vue') },
      { path: '/necesidades', component: () => import('pages/cliente/Necesidades.vue') },
      { path: '/registroproductos', component: () => import('pages/proveedor/RegistroProductos.vue') },
      { path: '/tienda', component: () => import('pages/Tienda.vue') },
      { path: '/descripcionproducto/:id', component: () => import('pages/DescripcionProducto.vue') },
      { path: '/chat', component: () => import('pages/Chat.vue') },
      { path: '/filtrar_categorias/:id', component: () => import('pages/cliente/FiltradoCategorias.vue') }

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
