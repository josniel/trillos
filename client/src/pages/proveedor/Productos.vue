<template>
  <div>
    <div class="row justify-between q-ma-sm">
        <q-btn no-caps class="shadow-11" color="white" text-color="black" label="Reportes" />
        <q-btn no-caps class="shadow-11" color="primary" text-color="black" label="Ofertas" />
    </div>
    <q-separator inset />
    <div class="text-h6 q-ma-md text-center">Mis Productos</div>
    <q-list class="q-mx-sm q-my-md q-gutter-sm" v-if="data.length > 0">
      <q-card class="q-pa-md bordes" v-for="(item, index) in data" :key="index" v-ripple >
        <div class="row justify-between">
          <div class="col-10">
            <div class="row justify-between">
              <q-scroll-area
              class="col-5"
                horizontal
                style="height: 27px;"
              >
                <div class="text-h6">{{item.name}}</div>
              </q-scroll-area>
              <q-rating
              class="col-7 row justify-end"
                v-model="ratingProduc"
                size="sm"
                color="amber-14"
                icon="star_border"
                icon-selected="star"
              />
            </div>

            <div class="row">
              <div>Cantidad: <strong>{{item.cantidad}}</strong></div>
            </div>
          </div>
          <q-separator vertical color="black" />
          <div class="column">
            <q-btn round flat color="white" size="sm" text-color="black" icon="edit" />
            <q-separator color="black" />
            <q-btn round flat color="white" size="sm" text-color="black" icon="delete" />
          </div>
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
        { name: 'Productoerwtgsergsertgydrfgdr1', description: 'kdfglsdf', cantidad: 59 },
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
