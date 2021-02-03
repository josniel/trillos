<template>
  <div>
    <q-separator inset />
    <div class="row justify-center">
        <div class="text-h6 q-ma-md text-center estilo-titulos">Datos de Perfil</div>
        <div v-if="datosusuario">
            <q-card class="bg-white full-width q-pa-xl q-ma-sm shadow-3">
                <div class="q-ml-md text-h7 text-grey-9 text-bold">Datos del Cliente</div>
                  <div class="row q-pa-sm">

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Correo Electronico:</div>
                      <div class="q-ml-sm text-h8"> {{ form.email }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Nombre del Cliente:</div>
                      <div class="q-ml-sm text-h8"> {{ form.full_name }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Documento de identidad del Cliente:</div>
                      <div class="q-ml-sm text-h8"> {{ form.run_dni }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Apellido del Cliente:</div>
                      <div class="q-ml-sm text-h8"> {{ form.last_name }} </div>
                    </div>

                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">País:</div>
                      <div class="q-ml-sm text-h8"> {{ form.country }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Dirección:</div>
                      <div class="q-ml-sm text-h8"> {{ form.direccion }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Numero de Telefono:</div>
                      <div class="q-ml-sm text-h8"> {{ form.phone }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Foto de perfil del Cliente:</div>
                        <img class="q-mt-sm q-ml-xs" :src="baseu + 'perfil' + form._id"
                        style="width:120px">
                    </div>

                  </div>
            <div class="row justify-center q-pa-sm">
                <q-btn color="primary" label="Actualizar Datos" @click="$router.push('/Datosedit')"/>
            </div>
          </q-card>
    </div>

    <div v-if="datosproveedor">
            <q-card class="bg-white full-width q-pa-xl q-ma-sm shadow-3">
                <div class="q-ml-md text-h7 text-grey-9 text-bold">Datos del Proveedor</div>
                  <div class="row q-pa-sm">

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Correo Electronico:</div>
                      <div class="q-ml-sm text-h8"> {{ form.email }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Nombre de la Empresa:</div>
                      <div class="q-ml-sm text-h8"> {{ form.full_name }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">País:</div>
                      <div class="q-ml-sm text-h8"> {{ form.country }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold" >Documento de identidad de la Empresa:</div>
                      <div class="q-ml-sm text-h8"> {{ form.run_dni }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Dirección:</div>
                      <div class="q-ml-sm text-h8"> {{ form.direccion }} </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Numero de Telefono:</div>
                      <div class="q-ml-sm text-h8"> {{ form.phone }} </div>
                    </div>

                    <div v-if="delivery">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Delivery de la empresa:</div>
                      <q-toggle
                          v-model="form.delivery"
                          label="Activado"
                          icon="delivery_dining"
                          disable
                        />
                    </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Foto de perfil de su tienda:</div>
                        <img class="q-mt-sm q-ml-xs" :src="baseu + 'perfil' + form._id"
                        style="width:120px">
                    </div>

                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div  class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Fotos que posee la tienda:</div>
                        <div v-for="(item, index) in form.tiendaFiles" :key="index" class="q-mt-sm q-ml-xs" >
                            <q-img
                              :src="baseu2 + item"
                              style="width:120px"
                            />
                        </div>
                     </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Días laborables:</div>
                        <div class="row">
                          <div v-for="(dia,index) in form.dias" :key="index" class="q-mt-sm q-ml-xs" >
                            {{dias[dia-1]}}
                          </div>
                        </div>
                    </div>

                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="q-mt-md q-ml-sm text-h7 text-grey-9 text-bold">Hora de Apertura y Cierre:</div>
                      <div class="q-ml-sm text-h8"> {{ form.hora_inicio }} - {{ form.hora_fin }} </div>
                    </div>

                  </div>
              <div class="row justify-center q-pa-sm">
                  <q-btn color="primary" label="Actualizar Datos" @click="$router.push('/Datosedit')"/>
              </div>
           </q-card>
    </div>
    </div>
  </div>
</template>
<script>
import { required, maxLength, minLength, sameAs } from 'vuelidate/lib/validators'
import env from '../env'
export default {
  data () {
    return {
      datosusuario: false,
      datosproveedor: false,
      form: {},
      repeatPassword: '',
      password: '',
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
    console.log(this.baseu2, 'el baseu')
  },
  validations () {
    return {
      form: {
        full_name: { required, maxLength: maxLength(40) },
        last_name: { required },
        country: { required },
        direccion: { required },
        run_dni: { required },
        phone: { required },
        hora_inicio: { required },
        hora_fin: { required }
      },
      repeatPassword: { sameAsPassword: sameAs('password') },
      password: { required, maxLength: maxLength(256), minLength: minLength(6) },
      perfilFile: { required },
      dias: { required }
    }
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
    },
    modificar_datos (id) {
      this.$api.put('datosnew/' + id, this.form).then(res => {
        if (res) {
          this.$q.notify({
            message: 'Datos Modificados con exito',
            color: 'positive'
          })
        }
      })
    },
    tienda () {
      var img = ''
      var cc = {}
      if (this.tiendaFiles.length > 0) {
        cc = this.tiendaFiles[this.tiendaFiles.length - 1]
        img = URL.createObjectURL(cc)
        this.imgTienda.push(img)
      }
    },
    test () {
      if (this.perfilFile) { this.imgPerfil = URL.createObjectURL(this.perfilFile) }
    },
    async next () {
      this.form.dias = this.dias
      this.$v.form.$touch()
      this.$v.dias.$touch()
      this.$v.perfilFile.$touch()
      if (!this.$v.form.$error && !this.$v.dias.$error && !this.$v.perfilFile.$error) {
        if (this.tiendaFiles.length > 0) {
          var formData = new FormData()
          formData.append('perfilFile', this.perfilFile)
          this.form.cantidadArchivos = this.tiendaFiles.length
          this.form.status = 0
          this.form.enable = true
          for (let i = 0; i < this.tiendaFiles.length; i++) {
            formData.append('tiendaFiles_' + i, this.tiendaFiles[i])
          }
          formData.append('dat', JSON.stringify(this.form))
          await this.$api.post('register', formData, {
            headers: {
              'Content-Type': undefined
            }
          }).then(res => {
            if (res) {
              this.$q.notify({
                message: 'Ya formas parte de Trillos, Bienvenido',
                color: 'positive'
              })
              this.loguear()
            }
          })
        } else {
          this.$q.dialog({
            message: 'Debes subir fotos de la tienda.',
            persistent: true
          }).onOk(() => {
          })
        }
      }
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
