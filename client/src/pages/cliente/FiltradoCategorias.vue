<template>
  <div class="row q-gutter-md q-ma-sm" v-if="data.length > 0">
    <q-card v-for="(item, index) in data" class="shadow-3 bg-secondary q-mt-lg" style="border-radius:12px;width: 150px" :key="index" @click="$router.push('/descripcionproducto/' + item._id)">
      <q-img :src="baseu + item.fileName" spinner-color="white" style="height: 190px; width: 150px" />
      <div class="text-subtitle1 text-center">{{item.name}}</div>
    </q-card>
  </div>
  <div v-else>
    <div class="absolute-center text-center row justify-center">
      <div class="text-h6">Sin productos para esta categoria</div>
      <q-btn class="q-mt-md" size="lg" color="primary" flat icon="arrow_back" label="volver" @click="$router.go(-1)" />
    </div>
  </div>
</template>

<script>
import env from '../../env'
export default {
  data () {
    return {
      id: this.$route.params.id,
      ruta: 'producto_filtrado',
      data: [],
      baseu: ''
    }
  },
  mounted () {
    this.cargar()
  },
  methods: {
    cargar () {
      this.$api.get(`${this.ruta}/${this.id}`).then(res => {
        console.log(res, 'ressssssss')
        this.data = res
        this.baseu = env.apiUrl + '/productos_img/'
      })
    }
  }
}
</script>

<style>

</style>
