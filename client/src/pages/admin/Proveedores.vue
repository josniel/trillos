<template>
  <div>
    <div class="row justify-between q-ma-sm">
        <q-btn no-caps class="shadow-11" color="white" text-color="black" label="Reportes" />
        <q-btn no-caps class="shadow-11" color="primary" text-color="black" label="Ofertas" />
    </div>
    <q-separator inset />
    <div class="text-h6 q-ma-md text-center">Proveedores</div>
    <q-list class="q-mx-sm q-my-md q-gutter-sm" v-if="data.length > 0">
      <q-card class="q-pa-md bordes" v-for="(item, index) in data" :key="index" v-ripple>
        <div class="row justify-between">
          <div class="col-4">
            <q-img :src="baseu + item._id" style="width:100px; height: 80px;" />
          </div>
          <div class="col-6">
              <q-scroll-area
                horizontal
                style="height: 33px; width:100%"
              >
                <div class="text-subtitle2 text-weight-bolder">{{item.full_name}}</div>
              </q-scroll-area>
              <div>Estatus: <strong>{{item.status}}</strong></div>
          </div>
          <div class="col-2 column justify-center">
            <q-toggle
                v-model="item.enable"
                :color="item.enable ? 'primary' : 'red'"
                />
          </div>
        </div>
      </q-card>
    </q-list>
    <q-card v-else class="shadow-2 q-ma-md q-pa-md">
      <div class="text-center text-subtitle1">Actualmente sin proveedores...</div>
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
    this.getProveedores()
    this.baseu = env.apiUrl + '/perfil_img/perfil'
  },
  methods: {
    getProveedores () {
      this.$api.post('user_by_rol', { rol: [3] }).then(res => {
        if (res) {
          this.data = res
          console.log('data', this.data)
        }
      })
    },
    deleteProv (id) {
      this.$q.dialog({
        title: 'Confirma',
        message: '¿Seguro deseas eliminar este proveedor?',
        cancel: true,
        persistent: true
      }).onOk(() => {

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
