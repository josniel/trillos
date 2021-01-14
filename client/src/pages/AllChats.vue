<template>
  <div>
    <div class="q-ma-md text-h6">Mis Chats</div>
    <q-separator inset />
    <q-list class="q-mx-sm q-my-md q-gutter-sm" v-if="data.length > 0">
      <q-card @click="$router.push('/chat/' + item._id)" class="q-pa-md bordes" v-for="(item, index) in data" :key="index" v-ripple >
        <div class="row justify-between">
          <div class="col-3">
            <q-avatar size="70px">
                <q-img :src="item.images ? baseu + '/' + item.images[0] : 'noimgpro.png'" style="width:70px" />
            </q-avatar>
          </div>
          <div class="col-9">
              <q-scroll-area
                horizontal
                style="height: 27px; width:100%"
              >
                <div class="text-h6">{{item.name}}</div>
              </q-scroll-area>
          </div>
        </div>
      </q-card>
    </q-list>
    <q-card v-else class="shadow-2 q-ma-md q-pa-md">
      <div class="text-center text-subtitle1">Actualmente sin chats...</div>
    </q-card>
  </div>
</template>

<script>
import env from '../env'
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
    this.baseu = env.apiUrl + '/necesidad_img'
  },
  methods: {
    getProduct () {
      this.$api.get('user_info').then(res => {
        if (res) {
          var id = res._id
          this.$api.get('necesidad_by_user_id/' + id).then(v => {
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
