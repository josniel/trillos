<template>
  <div>
    <div>
      <q-img src="carro.jpg" spinner-color="white" style="height: 250px; width: 100%">
          <div class="q-mb-sm text-subtitle2 q-pl-sm">NOMBRE TIENDA</div>
          <q-rating class="q-mt-lg" v-model="ratingTienda" size="2em" color="yellow" readonly/>
          <q-btn class="absolute-center" push color="white" text-color="black" round icon="camera_alt"/>
      </q-img>
      <botones-header class="q-ma-md"/>
      <q-card class="q-pa-xs q-mt-md shadow-up-4" style="border-radius:25px">
        <div class="q-mx-md text-h6">Mis Productos</div>
        <listado-de-sugerencia class="q-mt-xs"/>
    </q-card>
    </div>
  </div>
</template>

<script>
import BotonesHeader from '../../components/BotonesHeader.vue'
import ListadoDeSugerencia from '../../components/ListadoDeSugerencia.vue'
export default {
  components: { BotonesHeader, ListadoDeSugerencia },
  data () {
    return {
      img: '',
      ratingTienda: 2
    }
  }
}
</script>

<style>
</style>
