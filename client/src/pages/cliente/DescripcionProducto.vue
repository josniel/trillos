<template>
  <div class="bg-secondary">
      <q-img :src="baseu" spinner-color="white" style="height: 250px; width: 100%;border-bottom-right-radius:25px;border-bottom-left-radius:25px">
        <div class="row justify-between bg-transparent" style="width:100%">
          <q-card @click="$router.push('/tienda')" class="shadow-13 bg-grey-2 q-pa-xs col-10" style="border-top-left-radius:25px;border-top-right-radius:25px;border-bottom-right-radius:25px;border-bottom-left-radius:25px">
            <div class="row">
            <q-icon class="col-2" name="store" color="primary" style="font-size: 2rem;"/>
            <div class="col-10 text-h6 text-black text-weight-bolder">Nombre de Tienda</div>
          </div>
          </q-card>
          <q-icon class="col-2" :name="fav ? 'favorite' : 'favorite_border'" color="red" style="font-size: 2rem;" @click="fav = !fav"/>
        </div>
      </q-img>
      <q-card class="q-pa-md bg-secondary shadow-up-3 q-mt-sm" style="border-top-left-radius:25px;border-top-right-radius:25px">
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6 text-weight-bolder">{{form.name}}</q-item-label>
              <q-item-label class="text-subtitle2">Cantidad: {{form.cantidad}}</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <div class="row">
                <q-icon name="star" color="yellow" style="font-size: 2rem;"/>
                <q-item-label class="q-mt-sm text-subtitle1 text-weight-bolder">9.0</q-item-label>
              </div>
            </q-item-section>
          </q-item>
      </q-card>
      <q-card class="q-pa-md shadow-up-4" style="border-top-left-radius:25px;border-top-right-radius:25px">
        <div class="text-subtitle2 q-ml-md q-pt-xs">Descripción</div>
        <div class="q-pa-md">{{form.description}}</div>
        <div class="row justify-center q-pa-sm">
          <q-btn color="primary" label="Agregar" icon-right="local_grocery_store"/>
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
      ruta: 'producto',
      fav: false,
      form: {},
      baseu: ''
    }
  },
  mounted () {
    this.cargarProducto()
  },
  methods: {
    cargarProducto () {
      this.$api.get(`${this.ruta}/${this.id}`).then(res => {
        this.form = res
        this.baseu = env.apiUrl + '/productos_img/' + this.form.fileName
        console.log('producto', this.form)
      })
    }
  }
}
</script>

<style>

</style>
