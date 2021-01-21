<template>
  <div>
    <div class="row justify-between q-ma-sm">
        <div class="q-ml-sm text-h6">Mis Cotizaciones</div>
        <q-btn no-caps class="shadow-11" icon-right="forum" color="primary" text-color="black" label="Chats" to="/mis_chats" />
    </div>
    <q-separator inset />

    <div v-if="data.length > 0" class="q-pa-md q-gutter-md">
        <q-card class="bordes row" v-for="(cotizacion, index) in data" :key="index" @click="$router.push('/cotizacion/' + cotizacion._id)">
            <div class="col-3">
              <q-icon size="60px" class="text-black q-px-md q-pt-sm" name="account_circle" />
              <div class="text-center text-grey text-bold text-caption q-pb-xs">{{cotizacion.status}}</div>
            </div>
            <div class="col-9">
              <div class="text-black text-bold text-subtitle1 q-pt-sm">{{rol === 2 ? cotizacion.datos_proveedor.full_name : cotizacion.datos_cliente.full_name + ' ' + cotizacion.datos_cliente.last_name}}</div>
              <div class="absolute-bottom text-amber-8 text-subtitle1 text-right q-pr-sm">{{cotizacion.created_at_message}}</div>
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
    this.baseu = env.apiUrl + '/necesidad_img'
  },
  methods: {
    getRecords () {
      this.$api.get('user_info').then(v => {
        if (v) {
          this.rol = v.roles[0]
          this.$api.get('cotizaciones').then(res => {
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
