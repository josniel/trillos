<template>
  <div>
    <q-separator inset />
    <div class="row justify-center">
        <div class="text-h6 q-ma-md text-center estilo-titulos">Datos de Perfil</div>
        <div v-if="datosusuario">
            <q-card class="bg-lime-3 q-pa-xl q-ma-md shadow-3">
                  <div class="row justify-center items-center">

                    <div class="q-mt-none text-h7 text-grey-9 text-bold">
                       <q-avatar size="180px">
                        <img :src="baseu + 'perfil' + form._id">
                      </q-avatar>
                    </div>
                    </div>
                    <q-card-section class="q-mt-sm">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md text-h7 text-grey-9 text-bold">Correo Electronico:</div>
                      <div class="text-h8"> {{ form.email }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md text-h7 text-grey-9 text-bold">Nombre del Cliente:</div>
                      <div class="text-h8"> {{ form.full_name }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md text-h7 text-grey-9 text-bold">Documento de identidad del Cliente:</div>
                      <div class="text-h8"> {{ form.run_dni }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md text-h7 text-grey-9 text-bold">Apellido del Cliente:</div>
                      <div class="text-h8"> {{ form.last_name }} </div>
                    </div>

                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md text-h7 text-grey-9 text-bold">País:</div>
                      <div class="text-h8"> {{ form.country }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md text-h7 text-grey-9 text-bold">Dirección:</div>
                      <div class="text-h8"> {{ form.direccion }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md text-h7 text-grey-9 text-bold">Numero de Telefono:</div>
                      <div class="text-h8"> {{ form.phone }} </div>
                    </div>
                     </q-card-section>
            <div class="row justify-center q-pa-sm">
                <q-btn color="primary" label="Actualizar Datos" @click="$router.push('/Datosedit')"/>
            </div>
              </q-card>
    </div>

    <div v-if="datosproveedor">
          <q-card class="bg-lime-3 q-pa-xl q-ma-md shadow-3">
                  <div class="row justify-center items-center">

                      <div class="q-mt-none q-ml-sm text-h7 text-grey-9 text-bold"></div>
                       <q-avatar size="180px">
                        <img :src="baseu + 'perfil' + form._id" >
                      </q-avatar>
                  </div>

                    <q-card-section class="q-mt-sm">
                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="q-mt-none text-h7 text-grey-9 text-bold">Nombre de la Empresa:</div>
                        <div class="text-h8"> {{ form.full_name }} </div>
                      </div>

                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="q-mt-md text-h7 text-grey-9 text-bold">Correo Electronico:</div>
                        <div class="text-h8"> {{ form.email }} </div>
                      </div>

                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="q-mt-md text-h7 text-grey-9 text-bold">País:</div>
                        <div class="text-h8"> {{ form.country }} </div>
                      </div>

                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="q-mt-md text-h7 text-grey-9 text-bold" >Run o DNI de la Empresa:</div>
                        <div class="text-h8"> {{ form.run_dni }} </div>
                      </div>

                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="q-mt-md text-h7 text-grey-9 text-bold">Dirección:</div>
                        <div class="text-h8"> {{ form.direccion }} </div>
                      </div>

                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="q-mt-md text-h7 text-grey-9 text-bold">Numero de Telefono:</div>
                        <div class="text-h8"> {{ form.phone }} </div>
                      </div>

                      <div v-if="delivery">
                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="q-mt-md text-h7 text-grey-9 text-bold">Delivery de la empresa:</div>
                        <q-toggle
                            v-model="form.delivery"
                            label="Activado"
                            icon="delivery_dining"
                            color="blue"
                            disable
                          />
                      </div>
                      </div>

                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div  class="q-mt-md text-h7 text-grey-9 text-bold">Fotos que posee la tienda:</div>
                          <div v-for="(item, index) in form.tiendaFiles" :key="index" class="q-mt-sm" >
                              <q-img
                                :src="baseu2 + item"
                                style="width:110px"
                              />
                          </div>
                      </div>

                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div class="q-mt-md text-h7 text-grey-9 text-bold">Días laborables:</div>
                          <div class="row">
                            <div v-for="(dia,index) in form.dias" :key="index" class="q-mt-sm q-ml-xs" >
                              {{dias[dia-1]}}
                            </div>
                          </div>
                      </div>

                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="q-mt-md text-h7 text-grey-9 text-bold">Hora de Apertura y Cierre:</div>
                        <div class="text-h8"> {{ form.hora_inicio }} - {{ form.hora_fin }} </div>
                      </div>
                    </q-card-section>
              <div class="row justify-center q-pa-sm">
                  <q-btn color="primary" label="Actualizar Datos" @click="$router.push('/Datosedit')"/>
              </div>
          </q-card>
    </div>
    </div>
  </div>
</template>
<script>
import env from '../env'
export default {
  data () {
    return {
      datosusuario: false,
      datosproveedor: false,
      form: {},
      perfilFile: null,
      delivery: false,
      imgPerfil: '',
      baseu: '',
      baseu2: '',
      usuario: {},
      rol: null,
      tiendaFiles: [],
      imgTienda: [],
      id_datos: '',
      dias: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
    }
  },
  mounted () {
    this.getUser()
    this.baseu = env.apiUrl + '/perfil_img/'
    this.baseu2 = env.apiUrl + '/tienda_img/'
  },
  methods: {
    getUser () {
      this.$api.get('user_info').then(v => {
        if (v) {
          this.rol = v.roles[0]
          this.form = v
        }
        if (this.rol === 3) {
          this.datosproveedor = true
        }
        if (this.form.delivery === true) {
          this.delivery = true
        }
        if (this.rol === 2) {
          this.datosusuario = true
        }
        console.log(this.form, 'formulario2')
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
.estilo-titulos {
  background-color: #fff599;
  width: 250px;
  border-radius: 12px
}
</style>
