<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white">
        <q-btn round dense flat icon="keyboard_backspace" color="primary" @click="$router.go(-1)"/>
        <q-input class="q-ma-sm" dense color="white" bg-color="yellow-2" rounded outlined v-model="search" type="search" style="width: 400px">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
        <template v-slot:after>
          <q-btn round dense icon="person" color="primary"/>
        </template>
        </q-input>
      </q-toolbar>
    </q-header>
    <q-footer>
      <div class="bg-grey-1 text-primary shadow-2 full-width row justify-around" >
          <q-btn icon="home" color="primary" flat round size="md" :to="rol === 2 ? '/inicio_cliente' : rol === 3 ? '/inicio_proveedor' : ''" />
          <q-btn icon="view_list" color="primary" flat round size="md" :to="rol === 2 ? '/solicitudes' : rol === 3 ? '/productos' : ''"/>
          <q-btn icon="add" outline color="secondary" class="q-mb-sm" round size="lg" :to="rol === 2 ? '/registronecesidades' : rol === 3 ? '/registroproductos' : ''"/>
          <q-btn icon="forum" color="primary" flat round size="md" to="/mis_chats" />
          <q-btn icon="logout" color="primary" flat round size="md" to="/login" />
      </div>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      search: '',
      rol: null,
      id: ''
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    getUser () {
      this.$api.get('user_info').then(v => {
        if (v) {
          this.rol = v.roles[0]
          this.id = v._id
          console.log('id', this.id, 'rol ', this.rol)
        }
      })
    }
  }
}
</script>
