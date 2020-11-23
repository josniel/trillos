<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-input class="q-ma-sm" dense color="white" bg-color="white" rounded outlined v-model="search" type="search" style="width: 400px">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
        <template v-slot:after>
          <q-btn round dense flat icon="camera_alt" color="white"/>
        </template>
        </q-input>
      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs dense v-model="tab" stretch align="left" class="bg-grey-1 text-primary shadow-2 full-width" >
        <template>
          <q-tab name="ruta1" icon="camera_alt" label="TITULO"/>
           <q-tab name="ruta1" icon="rss_feed" label="Feed"/>
           <q-tab name="ruta1" icon="chat" label="Mensajes"/>
           <q-tab name="ruta1" icon="local_grocery_store" label="Cesta"/>
           <q-tab name="ruta1" icon="account_circle" label="Mi Perfil"/>
        </template>
      </q-tabs>
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
    }
  }
}
</script>
