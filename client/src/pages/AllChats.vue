<template>
  <div>
    <div class="q-ma-md text-h6">Mis Chats</div>
    <q-separator inset />
    <div v-if="data.length > 0" class="q-pr-md q-pt-sm text-subtitle2 text-right text-grey-8"><u>Tienes {{ data.length }} Mensajes</u></div>
    <!-- <q-list class="q-mx-sm q-my-md q-gutter-sm" v-if="data.length > 0">
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
    </q-list> -->

    <div v-if="data.length > 0" class="q-pa-md q-gutter-md">
        <q-card class="my-card shadow-13 row" @click="$router.push('/chat/' + chat._id)" v-for="(chat, index) in data" :key="index">
            <div class="col-3">
              <div class="text-center text-grey text-bold text-caption q-pt-sm">{{chat.visto ? 'Leido' : 'Pendiente'}}</div>
              <q-icon size="60px" class="text-black q-px-md q-pb-xs" name="account_circle" />
            </div>
            <div class="col-9">
              <div class="text-primary text-bold text-center text-subtitle1 q-pt-sm">{{rol === 2 ? chat.datos_proveedor.full_name : chat.datos_cliente.full_name}}</div>
              <div class="text-center text-caption">{{chat.last_message}}</div>
              <div class="absolute-bottom text-primary text-subtitle1 text-right q-pr-sm">{{chat.created_at}}</div>
            </div>
        </q-card>
    </div>

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
    this.getRecords()
    this.baseu = env.apiUrl + '/necesidad_img'
  },
  methods: {
    getRecords () {
      this.$api.get('user_info').then(v => {
        if (v) {
          this.rol = v.roles[0]
          this.$api.get('cotizaciones').then(res => {
            if (res) {
              this.data = res
              console.log('data', this.data)
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
