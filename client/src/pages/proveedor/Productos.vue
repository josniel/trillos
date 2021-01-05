<template>
  <div>
    <div class="row justify-between q-ma-sm">
        <q-btn no-caps class="shadow-11" color="white" text-color="black" label="Nuevo Producto" to="/registroproductos" />
        <q-btn no-caps class="shadow-11" color="primary" text-color="black" label="Ofertas" />
    </div>
    <q-separator inset />
    <q-list class="q-ma-sm q-gutter-sm" v-if="data.length > 0">
      <q-card class="q-pa-md bordes" v-for="(item, index) in data" :key="index" v-ripple >
        <div class="row justify-between">
          <div class="text-h6">{{item.name}}</div>
          <q-rating
            v-model="ratingProduc"
            size="sm"
            color="yellow"
            icon="star_border"
            icon-selected="star"
          />
        </div>
        <div class="row">
          <div>Cantidad: <strong>{{item.cantidad}}</strong></div>
        </div>
      </q-card>
    </q-list>
    <q-card v-else class="shadow-2 q-ma-md q-pa-md">
      <div class="text-center text-subtitle1">Actualmente sin productos...</div>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ratingProduc: 3,
      data: [
        { name: 'Producto1', description: 'kdfglsdf', cantidad: 59 },
        { name: 'Producto2', description: 'kdfglsdf', cantidad: 59 }
      ]
    }
  },
  mounted () {
  },
  methods: {
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
