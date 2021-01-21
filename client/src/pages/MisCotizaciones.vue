<template>
  <div>
    <div class="row justify-between q-ma-sm">
        <div class="q-ml-sm text-h6">Mis Cotizaciones</div>
        <q-btn no-caps class="shadow-11" icon-right="forum" color="primary" text-color="black" label="Chats" to="/mis_chats" />
    </div>
    <q-separator inset />

    <div v-if="data.length > 0" class="q-pa-md q-gutter-md">
        <q-card class="bordes row q-pa-md" v-for="(cotizacion, index) in data" :key="index" @click="$router.push('/cotizacion/' + cotizacion._id)">
            <div class="col-4">
                <q-img :src=" baseu + cotizacion.datos_necesidad.images[0]" style="width:100px" />
            </div>
            <div class="col-6">
              <div class="text-black text-bold text-subtitle1 q-pl-sm">{{cotizacion.datos_necesidad.name}}</div>
              <div class="row">
                <div class="text-caption q-pl-md q-pt-sm">Estatus:</div>
                <q-chip text-color="white" :label="cotizacion.status" :color="cotizacion.status === 'Cotizado' ? 'primary': cotizacion.status === 'Aprobado' ? 'positive' : 'negative'" />
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
