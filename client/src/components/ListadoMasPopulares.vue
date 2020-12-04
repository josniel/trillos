<template>
  <div class="row">
   <q-card v-for="(img, index) in imagenes" class="shadow-3 bg-secondary q-ml-md" style="border-radius:12px; height: 190px; width: 150px" :key="index">
    <q-img class="q-mr-sm" :src="img.dir" spinner-color="white" style="height: 190px; width: 150px" />
  </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imagenes: [
        {
          dir: 'bateria.jpg',
          name: 'ejemplo'
        },
        {
          dir: 'llaves.jpg',
          name: 'ejemplo'
        }
      ]
    }
  }
}
</script>

<style>

</style>
