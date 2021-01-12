<template>
  <div>
    <div class="row estilo-titulos q-mt-lg q-ml-sm q-mb-sm q-pl-sm">
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <div class="text-bold q-ml-sm">SOLICITUDES POR CATEGORIA</div>
    </div>
   <botones-header/>
   <div class="q-mt-lg text-center q-pa-md bg-secondary text-grey-1 q-ma-md" style="border-radius:12px">BANNER</div>
   <div class="row estilo-titulos q-mt-lg q-ml-sm q-mb-sm q-pl-sm">
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <div class="text-bold q-ml-sm">SUGERENCIA</div>
    </div>
    <listado-de-sugerencia :data="data" ruta="proveedor"/>
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
    this.getSolicitudes()
  },
  methods: {
    getSolicitudes () {
      this.$api.get('necesidad').then(v => {
        if (v) {
          this.data = v
        }
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
