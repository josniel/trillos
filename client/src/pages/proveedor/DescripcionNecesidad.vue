<template>
  <div class="bg-secondary" style="height:100%">
      <q-img :src="form.images ? baseu : 'noimgpro.png'" spinner-color="white" style="height: 250px; width: 100%;border-bottom-right-radius:25px;border-bottom-left-radius:25px">
        <div class="row justify-between" style="width:100%">
            <div class="col-10 text-h6 text-white text-weight-bolder">{{infoClient.full_name ? infoClient.full_name + ' ' + infoClient.last_name : 'Nombre de Cliente'}}</div>
          <q-icon class="col-2" :name="fav ? 'favorite' : 'favorite_border'" color="red" style="font-size: 2rem;" @click="fav = !fav"/>
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
      </q-card>
      <q-card class="q-pa-md shadow-up-4" style="border-top-left-radius:25px;border-top-right-radius:25px;height:300px">
        <div class="text-subtitle2 q-ml-md q-pt-xs">Descripción</div>
        <div class="q-pa-md">{{form.descripcion}}</div>
        <div class="absolute-bottom row justify-center q-pa-sm">
          <q-btn color="primary" label="Cotizar" icon-right="local_grocery_store" @click="$router.push('/chat/' + form._id)"/>
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
      ruta: 'necesidad',
      fav: false,
      form: {},
      infoClient: {},
      baseu: ''
    }
  },
  mounted () {
    this.cargarSolicitud()
  },
  methods: {
    cargarSolicitud () {
      this.$api.get(`${this.ruta}/${this.id}`).then(res => {
        if (res) {
          this.form = res
          this.baseu = env.apiUrl + '/necesidad_img/' + this.form.images[0]
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
  }
}
</script>

<style>

</style>
