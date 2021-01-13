<template>
  <div>
    <div class="row justify-around q-ma-sm">
        <q-btn no-caps class="shadow-11 col-5 q-mb-sm" color="primary" text-color="black" label="Semanal" />
        <q-btn no-caps class="shadow-11 col-5 q-mb-sm" color="primary" text-color="black" label="Mensual" />
        <q-btn no-caps class="shadow-11 col-5 q-mb-sm" color="primary" text-color="black" label="Semestral" />
        <q-btn no-caps class="shadow-11 col-5 q-mb-sm" color="primary" text-color="black" label="Anual" />
    </div>
    <q-separator inset />
    <div class="text-h6 q-ma-md text-center">Mis Clientes</div>
    <q-list class="q-mx-sm q-my-md q-gutter-sm" v-if="data.length > 0">
      <q-card class="q-pa-md bordes" v-for="(item, index) in data" :key="index" v-ripple >
        <div class="row justify-between">
          <div class="col-3">
            <q-avatar size="70px">
                <q-img :src="baseu + '/' + item.fileName" style="width:70px" />
            </q-avatar>
          </div>
          <div class="col-9">
              <q-scroll-area
                horizontal
                style="height: 27px; width:100%"
              >
                <div class="text-h6">{{item.name}}</div>
              </q-scroll-area>
              <q-rating
                v-model="ratingProduc"
                size="sm"
                color="amber-14"
                icon="star_border"
                icon-selected="star"
              />
              <div class="row justify-end">
                  <q-btn no-caps class="shadow-11" color="white" text-color="black" label="Ver" to="/chat" />
              </div>
          </div>
        </div>
      </q-card>
    </q-list>
    <q-card v-else class="shadow-2 q-ma-md q-pa-md">
      <div class="text-center text-subtitle1">Actualmente sin nada que reportar...</div>
    </q-card>
  </div>
</template>

<script>
import env from '../../env'
export default {
  data () {
    return {
      baseu: '',
      ratingProduc: 3,
      data: []
    }
  },
  mounted () {
    this.getProduct()
    this.baseu = env.apiUrl + '/productos_img'
  },
  methods: {
    getProduct () {
      this.$api.get('user_info').then(res => {
        if (res) {
          var id = res._id
          this.$api.get('producto_by_proveedor/' + id).then(v => {
            if (v) {
              this.data = v
              console.log('productos', this.data)
            }
          })
        }
      })
    }
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
