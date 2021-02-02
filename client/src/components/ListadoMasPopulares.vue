<template>
  <div class="row no-wrap">
   <q-card @click="$router.push('/tienda/' + img._id)" v-for="(img, index) in data" class="shadow-3 bg-secondary q-ml-md" style="border-radius:12px; width: 150px" :key="index">
    <q-img class="q-mr-sm" :src="baseu + img._id" spinner-color="white" style="height: 190px; width: 150px" >
      <div class="row absolute-bottom" style="width:100%">
        <q-icon class="col-1" name="room" color="blak" style="font-size: 1.5rem;"/>
        <div class="q-pl-sm q-pt-xs text-caption">{{img.direccion}}</div>
      </div>
    </q-img>
    <div class="text-subtitle1 text-center">{{img.full_name}}</div>
  </q-card>
  </div>
</template>

<script>
import env from '../env'
export default {
  data () {
    return {
      data: [],
      baseu: ''
    }
  },
  mounted () {
    this.tiendasPopulares()
  },
  methods: {
    tiendasPopulares () {
      this.$api.get('mas_populares').then(res => {
        if (res) {
          this.data = res
          this.baseu = env.apiUrl + '/perfil_img/perfil'
          console.log('data', this.data)
        }
      })
    }
  }
}
</script>

<style>

</style>
