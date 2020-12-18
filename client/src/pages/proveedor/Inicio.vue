<template>
  <div>
    <div class="text-caption q-ma-md q-mb-none"> Necesidades de Clientes </div>
    <q-separator inset />
    <q-list class="q-ma-sm q-gutter-sm" v-if="data.length > 0">
      <q-card class="q-pa-md bordes" v-for="(item, index) in data" :key="index" v-ripple @click="$router.push('/chat')">
        <div class="column">
          <div>Cliente: <strong>{{item.creador.full_name}}</strong></div>
          <div>Ciudad: <strong>{{item.ciudad}}</strong></div>
          <div>Necesidad: <strong>{{item.necesidad}}</strong></div>
          <div>Descripción: <strong>{{item.descripcion}}</strong></div>
        </div>
      </q-card>
    </q-list>
    <q-card v-else class="shadow-2 flex flex-center q-pa-xl" style="width:400px; min-width:300px; max-width:400px">
      <div class="text-center text-subtitle1">Actualmente sin necesidades...</div>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.cargarNecesidades()
  },
  methods: {
    cargarNecesidades () {
      this.$api.get('necesidad').then(res => {
        this.data = res
        console.log(res, 'res data')
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
