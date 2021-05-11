<template>
  <div>
    <q-img :src="baseu + 'perfil' + form2._id" spinner-color="white" style="height: 300px; width: 100%;border-bottom-right-radius:25px;border-bottom-left-radius:25px">
      <div class="column absolute-bottom">
      <div class="text-h7 text-white text-weight-bolder" style="width: 100%">{{form2.full_name}}</div>
      <div class="text-h7 text-white text-weight-bolder" style="width: 100%">{{form2.direccion}}</div>
      <q-rating v-model="ratingTienda" size="1.5em" color="yellow" readonly/>
      </div>
    </q-img>
    <div class="q-mt-lg q-ml-sm q-mb-sm q-pl-sm">
      <div class="text-bold q-ml-sm">Solicitudes en curso</div>
    </div>
    <q-scroll-area
      horizontal
      style="height: 230px; width: 100%;"
      class="bg-grey-1 rounded-borders"
    >
    <div class="row no-wrap q-gutter-xl">
      <q-card v-for="(img, index) in data2"   bordered style="width: 400px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="index" @click="$router.push('/descripcionsolicitud/' + img._id)">
        <q-card-section horizontal>
            <q-card-section>
              <div class="q-pt-md column items-center justify-center">
                <q-img
                  style="height: 90px;width: 120px"
                  class="rounded-borders"
                  :src="img.fileName ? baseu2 + '/' + img.fileName : img.images ? baseu2 + '/' + img.images[0] : 'noimgpro.png'" spinner-color="white"
                />
                <div class="text-overline">{{img.datos_cliente.full_name}}</div>
                </div>
              </q-card-section>

            <q-card-section class="q-pt-xs">
              <div class="text-h5 q-mt-sm q-mb-xs">{{img.name}}</div>
              <div class="column justify-center">
                <div class="text-caption text-grey">
                  {{img.descripcion}}
                </div>
                <div class="text-caption">nivel de requerimiento</div>
                <div class="row">
                  <q-radio v-model="img.colorRadio" disable keep-color size="xs" val="red" color="red" />
                  <q-radio v-model="img.colorRadio" disable keep-color size="xs" val="orange" color="orange" />
                  <q-radio v-model="img.colorRadio" disable keep-color size="xs" val="blue" color="blue" />
                </div>
                <div class="text-caption">{{img.direccion}}</div>
              </div>
            </q-card-section>

          </q-card-section>
      </q-card>
    </div>
    </q-scroll-area>

   <botones-header/>

   <listado-de-sugerencia v-if="data.length" :data="data" :direccion="true" ruta="proveedor"/>
    <q-card v-else class="shadow-11 q-ma-md q-pa-md">
      <div class="text-center text-subtitle1">Sin solicitudes disponibles...</div>
    </q-card>

      <div class="q-pt-xl column items-center justify-center">
      <q-btn color="primary" rounded text-color="black" label="Ver mas" style="width:150px" />
      </div>

  </div>
</template>

<script>
import env from '../../env'
import BotonesHeader from '../../components/BotonesHeader.vue'
import ListadoDeSugerencia from '../../components/ListadoDeSugerencia3.vue'
export default {
  components: {
    BotonesHeader,
    ListadoDeSugerencia
  },
  data () {
    return {
      data: {},
      data2: {},
      id: '',
      listado: true,
      form2: {},
      baseu: '',
      baseu2: '',
      form: {},
      user: {
      },
      info: {},
      listado2: false,
      ratingTienda: 0
    }
  },
  async mounted () {
    this.baseu = env.apiUrl + '/perfil_img/'
    this.baseu2 = env.apiUrl + '/necesidad_img'
    await this.getUser()
    this.getSolicitudes()
    this.getSolicitudes2()
    this.estaLogueado()
  },
  methods: {
    async getSolicitudes () {
      await this.$api.get('user_info').then(res => {
        this.info = res
        console.log(this.info, 'info del usuario')
        if (res.status === 0) {
          this.data = {}
          this.$q.dialog({
            title: 'Atención',
            message: 'Para cotizar y ver solicitudes de clientes debes esperar por la autorización del administrador.',
            cancel: false,
            persistent: true
          }).onOk(() => {
            // Ok
          }).onCancel(() => {
            // cancel
          })
        } else if (res.status === 2) {
          this.data = {}
          this.$q.dialog({
            title: 'Atención',
            message: 'Tu cuenta ha sido rechazada. Debes modificar tu información de usuario y esperar por respuesta del administrador.',
            cancel: false,
            persistent: true
          }).onOk(() => {
            // Ok
          }).onCancel(() => {
            // cancel
          })
        } else {
          this.$api.get('necesidades').then(v => {
            if (v) {
              this.data = v
              console.log(this.data, 'dataa')
            }
          })
        }
      })
    },

    async getSolicitudes2 () {
      await this.$api.get('user_info').then(res => {
        this.$api.get('show_all_cotizations2').then(v => {
          if (v) {
            this.data2 = v
            console.log(this.data2, 'dataaaaaaaaa2222')
          }
        })
      }
      )
    },

    getUser () {
      this.$api.get('user_info').then(v => {
        if (v) {
          this.rol = v.roles[0]
        }
        if (this.rol === 3) {
          this.datosproveedor = true
          this.form2 = v
          this.id = this.form2._id
          this.calificacion()
        }
        if (this.rol === 2) {
          this.form = v
        }
      })
    },
    estaLogueado () {
      const logueo = JSON.parse(localStorage.getItem('TRI_SESSION_INFO'))
      console.log(logueo, 'usuario')
      if (logueo) {
        this.user = JSON.parse(localStorage.getItem('TRI_SESSION_INFO'))
      }
    },
    calificacion () {
      this.$api.get('calificacion_by_proveedor/' + this.form2._id).then(res => {
        if (res) {
          this.ratingTienda = res
        }
      })
    }
  }
}
</script>

<style>
.estilo-titulos {
  background-color: #fff599;
  width: 250px;
  border-radius: 12px
}

</style>>
