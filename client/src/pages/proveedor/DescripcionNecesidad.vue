<template>
  <div class="bg-secondary" style="height:100%">
      <q-img :src="form.images ? baseu + perfile : 'noimgpro.png'" spinner-color="white" style="height: 250px; width: 100%;border-bottom-right-radius:25px;border-bottom-left-radius:25px">
        <div class="row justify-between" style="width:100%">
            <div class="col-10 text-h6 text-white text-weight-bolder">{{infoClient.full_name && infoClient.last_name ? infoClient.full_name + ' ' + infoClient.last_name : infoClient.full_name}}</div>
          <q-icon v-if="rol === 3" class="col-2" :name="fav ? 'favorite' : 'favorite_border'" color="red" style="font-size: 2rem;" @click="fav = !fav"/>
        </div>
      </q-img>

      <q-card class="q-pa-md bg-secondary shadow-up-3 q-mt-sm" style="border-top-left-radius:25px;border-top-right-radius:25px">
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6 text-weight-bolder">{{form.name}}</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <div class="row">
                <q-icon name="star" color="yellow" style="font-size: 2rem;"/>
                <q-item-label class="q-mt-sm text-subtitle1 text-weight-bolder">9.0</q-item-label>
              </div>
            </q-item-section>
          </q-item>
          <q-scroll-area
          horizontal
          style="height: 110px; width: 100%;"
        >
          <div class="row" style="width: 100%">
            <q-card @click="perfile = img" v-for="(img, index) in form.images" class="bg-secondary q-mt-xs q-mr-sm" style="border-radius:12px;width: 100px" :key="index">
              <q-img :src="form.images ? baseu + img : 'noimgpro.png'" spinner-color="white" style="height: 100px; width: 100px" />
            </q-card>
          </div>
        </q-scroll-area>
      </q-card>

      <q-card class="q-pa-md shadow-up-4" style="border-top-left-radius:25px;border-top-right-radius:25px;min-height:240px">
        <div class="text-subtitle2 q-ml-md q-pt-xs">Descripción</div>
        <div class="q-pa-md">{{form.descripcion}}</div>
        <div v-if="rol === 3" class="row justify-center q-pa-sm q-mt-md">
          <q-btn color="primary" label="Iniciar cotización" @click="iraChat(form._id)"/>
        </div>
      </q-card>
  </div>
</template>

<script>
import env from '../../env'
export default {
  data () {
    return {
      id: this.$route.params.id,
      rol: 0,
      perfile: '',
      ruta: 'necesidad',
      fav: false,
      form: {},
      infoClient: {},
      baseu: ''
    }
  },
  mounted () {
    this.cargarSolicitud()
    this.baseu = env.apiUrl + '/necesidad_img/'
  },
  methods: {
    cargarSolicitud () {
      this.$api.get('user_info').then(res => {
        if (res) {
          this.rol = res.roles[0]
          this.$api.get(`${this.ruta}/${this.id}`).then(res => {
            if (res) {
              this.form = res
              this.perfile = this.form.images[0]
              console.log('id', this.form.ownerId, 'solicitud', this.form)
              if (this.form) {
                this.$api.get('user_by_id/' + this.form.ownerId).then(v => {
                  this.infoClient = v
                  console.log('Cliente', this.infoClient)
                })
              }
            }
          })
        }
      })
    },
    iraChat (id) {
      this.$api.get('user_info').then(res => {
        if (res) {
          var info = {}
          info.proveedor_id = res._id
          info.cliente_id = this.infoClient._id
          this.$api.post('crear_chat/' + id, info).then(v => {
            if (v) {
              this.$router.push('/chat/' + v._id)
            }
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
