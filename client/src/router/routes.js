
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/inicio', component: () => import('pages/Inicio.vue') },
      { path: '/necesidades', component: () => import('pages/Necesidades.vue') },
      { path: '/registroproductos', component: () => import('pages/RegistroProductos.vue') },
      { path: '/tienda', component: () => import('pages/Tienda.vue') },
      { path: '/descripcionproducto', component: () => import('pages/DescripcionProducto.vue') }

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
