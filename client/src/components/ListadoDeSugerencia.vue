<template>
  <div class="row q-gutter-md q-ma-sm">
    <q-card v-for="(img, index) in productos" class="shadow-3 bg-secondary q-mt-lg" style="border-radius:12px;width: 150px" :key="index" @click="$router.push('/descripcionproducto/' + img._id)">
      <q-img :src="baseu + '/' + img.fileName" spinner-color="white" style="height: 190px; width: 150px" />
      <div class="text-subtitle1 text-center">{{img.name}}</div>
    </q-card>
  </div>
</template>

<script>
import env from '../env'
export default {
  data () {
    return {
      productos: [
      ],
      baseu: ''
    }
  },
  mounted () {
    this.baseu = env.apiUrl + '/productos_img'
    this.cargarProductos()
  },
  methods: {
    cargarProductos () {
      this.$api.get('producto').then(res => {
        this.productos = res
      })
    }
  }
}
</script>

<style>

</style>
