<template>
  <div>
    <div class="row estilo-titulos q-mt-lg q-ml-sm q-mb-sm q-pl-sm">
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <div class="text-bold q-ml-sm">ENCUENTRA POR CATEGORÍA</div>
    </div>
   <botones-header/>
   <div class="q-mt-lg text-center q-pa-md text-weight-bolder bg-secondary text-grey-1 q-ma-md" style="border-radius:12px">BIENVENIDO CLIENTE</div>
   <div class="row estilo-titulos q-mt-lg q-ml-sm q-mb-sm q-pl-sm">
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <div class="text-bold q-ml-sm">SUGERENCIAS</div>
    </div>
    <listado-de-sugerencia :data="data" ruta="cliente" />
    <div class="row estilo-titulos q-mt-lg q-ml-sm q-mb-sm q-pl-sm">
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <div class="text-bold q-ml-sm">MAS POPULARES</div>
   </div>
    <listado-mas-populares/>
  </div>
</template>

<script>
import BotonesHeader from '../../components/BotonesHeader.vue'
import ListadoDeSugerencia from '../../components/ListadoDeSugerencia.vue'
import ListadoMasPopulares from '../../components/ListadoMasPopulares.vue'
export default {
  components: {
    BotonesHeader,
    ListadoDeSugerencia,
    ListadoMasPopulares
  },
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    this.cargarProductos()
  },
  methods: {
    cargarProductos () {
      this.$api.get('producto').then(res => {
        this.data = res
      })
    }
  }
}
</script>

<style>
.estilo-titulos {
  background-color: #fff599;
  width: 250px;
  border-radius: 12px
}

</style>>
