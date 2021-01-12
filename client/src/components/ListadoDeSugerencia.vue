<template>
  <div class="row q-gutter-md q-ma-sm">
    <q-card v-for="(img, index) in data" class="shadow-3 bg-secondary q-mt-lg" style="border-radius:12px;width: 150px" :key="index" @click="ruta === 'cliente' ? $router.push('/descripcionproducto/' + img._id) : ''">
      <q-img :src="img.fileName ? baseu + '/' + img.fileName : img.images ? baseu + '/' + img.images[0] : 'noimgpro.png'" spinner-color="white" style="height: 190px; width: 150px" />
      <div class="text-subtitle1 text-center">{{img.name}}</div>
    </q-card>
  </div>
</template>

<script>
import env from '../env'
export default {
  props: ['data', 'ruta'],
  data () {
    return {
      baseu: ''
    }
  },
  mounted () {
    if (this.ruta === 'cliente' || this.ruta === 'tienda') {
      this.baseu = env.apiUrl + '/productos_img'
    } else {
      this.baseu = env.apiUrl + '/necesidad_img'
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
