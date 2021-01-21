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
    <div v-if="rol === 2 && btnClient" class="row justify-center q-my-md">
      <q-btn class="q-mr-md" label="Rechazar" color="red" push glossy style="width:110px;height:40px" />
      <q-btn label="Aprobar" color="primary" push glossy style="width:110px;height:40px" />
    </div>

    <q-dialog v-model="statusAprobado" style="width:100%">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-bold text-primary">Cotizacion Aprobada</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div class="q-px-xs text-subtitle2">Ingrese la fecha de finalización del trabajo</div>
          <q-input outlined v-model="fecha_termino" mask="date" placeholder="aaaa/mm/dd">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="fecha_termino">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <div class="row justify-center q-mt-md">
            <q-btn class="q-mr-md" label="Iniciar" color="positive" push glossy />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="statusRechazado" style="width:100%">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-bold text-red">Cotizacion Rechazada</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div class="q-px-xs text-subtitle1">Esta cotización fue rechazada.</div>
        </q-card-section>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      statusAprobado: false,
      btnClient: true,
      statusRechazado: false,
      fecha_termino: '',
      rol: 0,
      cotization: {
      }
    }
  },
  mounted () {
    this.getRecords()
    this.getCotization()
  },
  methods: {
    getRecords () {
      this.$api.get('user_info').then(v => {
        if (v) {
          this.rol = v.roles[0]
        }
      })
    },
    getCotization () {
      this.$api.get('cotization_by_id/' + this.id).then(v => {
        if (v) {
          console.log('v', v)
          this.cotization = v.cotizacion
          if (v.status !== 'Cotizado') {
            this.btnClient = false
          }
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
