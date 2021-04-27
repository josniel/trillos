<template>
  <div class="row justify-around ">
    <q-scroll-area
        horizontal
        style="height: 130px; width: 100%;"
        class="bg-grey-1 rounded-borders"
      >
        <div class="row no-wrap">
          <q-btn v-for="(item, index) in categorias" flat push color="white" text-color="black" class="q-mt-sm q-mr-sm q-ml-sm" :to="'/filtrar_categorias/' + item._id" :key="index">
        <div class="column items-center justify-center">
          <q-avatar square size="40px">
            <img :src="item.icons">
          </q-avatar>
          <div class="text-caption">{{item.name}}</div>
        </div>
      </q-btn>
        </div>
      </q-scroll-area>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categorias: [
      ]
    }
  },
  mounted () {
    this.obtenerDatos()
  },
  methods: {
    obtenerDatos () {
      this.$api.get('categoria').then(res => {
        if (res) {
          this.categorias = res
        }
      })
    }
  }

}
</script>

<style>

</style>>
