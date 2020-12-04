<template>
  <div>
    <div class="q-mt-lg q-ml-sm q-mb-sm">NECESITAS AL PASO</div>
   <botones-header/>
  <div class="q-mt-lg text-center q-pa-md bg-secondary text-grey-1 q-ma-md" style="border-radius:12px">BANNER</div>
  <div class="q-mt-sm q-ml-md q-mb-sm text-bold estilo-titulos q-pl-sm">SUGERENCIA</div>
  <listado-de-sugerencia/>
  <div class="q-mt-sm q-ml-md q-mb-sm estilo-titulos text-bold q-pl-sm">MAS POPULARES</div>
  <listado-mas-populares/>
  </div>
</template>

<script>
import BotonesHeader from '../components/BotonesHeader.vue'
import ListadoDeSugerencia from '../components/ListadoDeSugerencia.vue'
import ListadoMasPopulares from '../components/ListadoMasPopulares.vue'
export default {
  components: {
    BotonesHeader,
    ListadoDeSugerencia,
    ListadoMasPopulares
  }
}
</script>

<style>
.estilo-titulos {
  background-color: #fff599;
  width: 230px;
  border-radius: 12px
}

</style>>
