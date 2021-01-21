<template>
  <div>
    <q-card class="q-ma-sm">
        <q-card-section>
        <div class="text-primary text-center text-h5">* Cotización *</div>
        <q-separator inset class="q-mt-md" />
        <div class="column q-mt-sm">
            <div class="column">
                <div class="row items-center">
                <div class="text-subtitle2 text-grey-9 q-ml-sm"> * Servicios *</div>
                </div>
                <div class="row justify-center">
                <div class="col-6 title-table q-pa-xs">Servicio</div>
                <div class="col-6 title-table q-pa-xs">Precio</div>
                </div>
                <div class="row justify-center q-mt-sm" v-for="(item, index) in cotizacion.servicio" :key="index">
                <div class="col-6 title-table-product q-pa-xs">{{item.servicio}}</div>
                <div class="col-6 title-table-product q-pa-xs">{{item.precio}}</div>
                </div>
            </div>
        </div>
        <q-separator inset class="q-mt-md" />
        <div class="row justify-around q-mt-md">
            <div class="text-h6 text-primary">Total</div>
            <div class="column">
            <div class="text-h6 text-primary">$ {{cotizacion.total}}</div>
            </div>
        </div>
        <div class="row justify-around q-mt-md">
            <q-btn label="Rechazar" color="red" push glossy style="width:150px;height:45px" />
            <q-btn label="Aprobar" color="primary" push glossy style="width:150px;height:45px" />
        </div>
        </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 'this.$route.params.id',
      rol: 0,
      cotizacion: {
        servicio: [
          {servicio: 'servicio', precio: 000}
        ],
        total: 000
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

<style>
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
