<template>
  <div>
    <div>
      <q-img src="carro.jpg" spinner-color="white" style="height: 250px; width: 100%">
          <div class="q-mb-sm text-subtitle2 q-pl-sm">NOMBRE TIENDA</div>
          <q-rating class="q-mt-lg" v-model="ratingModel" size="2em" color="yellow" readonly/>
          <q-btn class="absolute-center" push color="white" text-color="black" round icon="camera_alt"/>
      </q-img>
      <q-card class="q-pa-xs shadow-up-4" style="border-radius:25px">
        <botones-header class="q-ma-md"/>
        <listado-de-sugerencia class="q-mt-xl"/>
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
      img: ''
    }
  }
}
</script>

<style>
</style>
