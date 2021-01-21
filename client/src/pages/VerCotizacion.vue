<template>
  <div>
    <div class="text-primary text-center text-bold q-my-md text-h5">* Cotización *</div>
    <q-separator inset />
    <div class="column q-ma-md">
      <div class="row items-center">
        <div class="text-subtitle2 text-grey-9 q-ml-sm">* Servicios *</div>
      </div>
      <div class="row justify-center">
        <div class="col-6 title-table q-pa-xs">Servicio</div>
        <div class="col-6 title-table q-pa-xs">Precio</div>
      </div>
      <div class="row justify-center q-mt-sm" v-for="(item, index) in cotization.servicios" :key="index">
        <div class="col-6 title-table-product q-pa-xs">{{item.servicio}}</div>
        <div class="col-6 title-table-product q-pa-xs">{{item.precio}}</div>
      </div>
    </div>
    <q-separator inset />
    <div class="row justify-around q-my-md">
      <div class="text-h6 text-primary">Total</div>
      <div class="text-h6 text-primary">$ {{cotization.total}}</div>
    </div>
    <div class="row justify-center q-my-md">
      <q-btn class="q-mr-md" label="Rechazar" color="red" push glossy style="width:110px;height:40px" />
      <q-btn label="Aprobar" color="primary" push glossy style="width:110px;height:40px" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      rol: 0,
      cotization: {
      }
    }
  },
  mounted () {
    this.getRecords()
  },
  methods: {
    getRecords () {
      this.$api.get('user_info').then(v => {
        if (v) {
          this.rol = v.roles[0]
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.title-table {
  border-radius: 12px;
  background-color: #b3e3f4;
  color: #529cb3;
  border: 1px solid grey;
}
.title-table-product {
  border-radius: 12px;
  background-color: #888585;
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
}
</style>
