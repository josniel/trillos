<template>
  <div>
    <div class="row justify-between q-ma-sm">
        <div class="q-ml-sm text-h6">Mis Cotizaciones</div>
        <q-btn no-caps class="shadow-11" icon-right="forum" color="primary" text-color="black" label="Chats" to="/mis_chats" />
    </div>
    <q-separator inset />

    <div v-if="data.length > 0" class="q-pa-md q-gutter-md">
        <q-card class="bordes row q-pl-md q-py-md q-pr-xs" v-for="(cotizacion, index) in data" :key="index" @click="$router.push('/cotizacion/' + cotizacion._id + '/' + cotizacion.necesidad_id )">
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
                <div class="text-caption q-pl-sm">{{rol === 2 ? cotizacion.datos_proveedor.full_name : rol === 3 ? cotizacion.datos_cliente.full_name + ' ' + cotizacion.datos_cliente.last_name : ''}}</div>
              </q-scroll-area>
              <div class="row">
                <div class="text-caption text-bold q-ml-sm q-pt-sm">Estatus:</div>
                <q-chip text-color="white" :label="cotizacion.status" :color="cotizacion.status === 'Cotizado' ? 'primary': cotizacion.status === 'Aprobado' || cotizacion.status === 'Iniciado' ? 'positive' : cotizacion.status === 'Terminado' ? 'blue' : 'negative'" />
              </div>
            </div>
        </q-card>
    </div>

    <q-card v-else class="shadow-2 q-ma-md q-pa-md">
      <div class="text-center text-subtitle1">Actualmente sin cotizaciones...</div>
    </q-card>
  </div>
</template>

<script>
import env from '../env'
export default {
  data () {
    return {
      baseu: '',
      data: []
    }
  },
  mounted () {
    this.getRecords()
    this.baseu = env.apiUrl + '/necesidad_img/'
  },
  methods: {
    getRecords () {
      this.$api.get('user_info').then(v => {
        if (v) {
          this.rol = v.roles[0]
          this.$api.get('show_all_cotizations').then(res => {
            if (res) {
              this.data = res
              console.log('data', this.data)
            }
          })
        }
      })
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
</style>
