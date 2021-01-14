<template>
  <div>
    <div class="row justify-between q-ma-sm">
        <q-btn no-caps class="shadow-11" color="white" text-color="black" label="Reportes" to="/reportes_cliente" />
    </div>
    <q-separator inset />
    <div class="text-h6 q-ma-md text-center">Mis Solicitudes</div>
    <q-list class="q-mx-sm q-my-md q-gutter-sm" v-if="data.length > 0">
      <q-card class="q-pa-md bordes" v-for="(item, index) in data" :key="index" v-ripple >
        <div class="row justify-between">
          <div class="col-4">
            <q-img :src="item.images ? baseu + '/' + item.images[0] : 'noimgpro.png'" style="width:100px" />
          </div>
          <div class="col-6">
              <q-scroll-area
                horizontal
                style="height: 27px; width:100%"
              >
                <div class="text-h6">{{item.name}}</div>
              </q-scroll-area>
              <div>Cantidad: <strong>{{item.descripcion}}</strong></div>
          </div>
          <q-separator vertical color="black" />
          <div class="column">
            <q-btn round flat color="white" size="sm" text-color="black" icon="edit" @click="editSolicitud(item._id)" />
            <q-separator color="black" />
            <q-btn round flat color="white" size="sm" text-color="red" icon="delete" @click="deleteSolicitud(item._id)" />
          </div>
        </div>
      </q-card>
    </q-list>
    <q-card v-else class="shadow-2 q-ma-md q-pa-md">
      <div class="text-center text-subtitle1">Actualmente sin solicitudes...</div>
    </q-card>
  </div>
</template>

<script>
import env from '../../env'
export default {
  data () {
    return {
      baseu: '',
      data: []
    }
  },
  mounted () {
    this.getSolicitudes()
    this.baseu = env.apiUrl + '/necesidad_img'
  },
  methods: {
    getSolicitudes () {
      this.$api.get('user_info').then(res => {
        if (res) {
          var id = res._id
          this.$api.get('necesidad_by_user_id/' + id).then(v => {
            if (v) {
              this.data = v
              console.log('solicitudes', this.data)
            }
          })
        }
      })
    },
    editSolicitud (id) {
      this.$router.push('/editar_solicitud/' + id)
    },
    deleteSolicitud (id) {
      this.$q.dialog({
        title: 'Confirma',
        message: '¿Seguro deseas eliminar esta solicitud?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$api.delete('necesidad/' + id).then(res => {
          if (res) {
            this.$q.notify({
              color: 'positive',
              message: 'Eliminado Correctamente'
            })
            this.getSolicitudes()
          }
        })
      }).onCancel(() => {
        // console.log('>>>> Cancel')
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
