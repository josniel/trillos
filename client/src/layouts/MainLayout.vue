<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white">
        <q-btn round dense flat icon="reorder" color="grey"/>
        <q-input class="q-ma-sm" dense color="white" bg-color="yellow-2" rounded outlined v-model="search" type="search" style="width: 400px">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
        <template v-slot:after>
          <q-btn round dense flat icon="settings" color="grey"/>
        </template>
        </q-input>
      </q-toolbar>
    </q-header>
    <q-footer>
      <div class="bg-grey-1 text-primary shadow-2 full-width row justify-around" >
          <q-btn icon="home" color="primary" flat round size="md" to="/inicio_cliente" />
           <q-btn icon="chat" color="primary" flat round size="md" to="/chat" />
           <q-btn icon="add" outline color="secondary" class="q-mb-sm" round size="lg" to="/necesidades"/>
           <q-btn icon="local_grocery_store" color="primary" flat round size="md"/>
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
      search: ''
    }
  }
}
</script>
