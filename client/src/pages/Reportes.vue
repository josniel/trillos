<template>
  <div>
    <div class="row justify-around q-ma-sm">
        <q-btn no-caps class="shadow-11 col-5 q-mb-sm" color="primary" text-color="black" label="Semanal" @click="filter('semanal')" />
        <q-btn no-caps class="shadow-11 col-5 q-mb-sm" color="primary" text-color="black" label="Mensual" @click="filter('mensual')" />
        <q-btn no-caps class="shadow-11 col-5 q-mb-sm" color="primary" text-color="black" label="Semestral" @click="filter('semestral')" />
        <q-btn no-caps class="shadow-11 col-5 q-mb-sm" color="primary" text-color="black" label="Anual" @click="filter('anual')" />
    </div>
    <q-separator inset />
    <div class="row justify-center">
        <div class="text-h6 q-ma-md text-center estilo-titulos">Mis Reportes</div>
    </div>

    <div v-if="data.length > 0" class="q-pa-md q-gutter-md">
        <q-card class="bordes row q-pl-md q-py-md q-pr-xs" v-for="(cotizacion, index) in data" :key="index">
            <div class="col-4">
                <q-img :src=" baseu + cotizacion.datos_necesidad.images[0]" style="height:80px; width:100px" />
            </div>
            <div class="col-7">
              <div class="text-black text-bold text-subtitle1 q-pl-sm">{{cotizacion.datos_necesidad.name}}</div>
              <q-scroll-area
                horizontal
                style="height: 20px; width: 100%;"
                class="rounded-borders"
                >
                <div class="text-caption q-pl-sm">{{cotizacion.datos_cliente ? cotizacion.datos_cliente.full_name + ' ' + cotizacion.datos_cliente.last_name : cotizacion.datos_proveedor.full_name}}</div>
              </q-scroll-area>
            </div>
        </q-card>
    </div>

    <q-card v-else class="shadow-2 q-ma-md q-pa-md">
      <div class="text-center text-subtitle1">Actualmente sin nada que reportar...</div>
    </q-card>
  </div>
</template>

<script>
import env from '../env'
// import moment from 'moment'
export default {
  data () {
    return {
      baseu: '',
      today: null,
      ratingProduc: 3,
      allData: [],
      data: []
    }
  },
  mounted () {
    this.getData()
    this.baseu = env.apiUrl + '/necesidad_img/'
  },
  methods: {
    getData () {
      this.$api.get('show_all_cotizations').then(res => {
        if (res) {
          this.allData = res.filter(v => v.status === 'Terminado')
          this.data = this.allData
          console.log('reportes', this.data)
        }
      })
    },
    filter (val) {
      console.log('filtrar', val)
    }
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border-left: 6px solid $primary;
  background-color: rgba(202, 202, 202, 0.474);
  border-radius: 12px;
}
.estilo-titulos {
  background-color: #fff599;
  width: 250px;
  border-radius: 12px
}
</style>
