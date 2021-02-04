<template>
  <div>
    <q-separator inset />
    <div class="row justify-center">
        <div class="text-h6 q-ma-md text-center estilo-titulos">Datos de Perfil</div>
        <div v-if="datosusuario">
            <q-card class="bg-amber-1 q-pa-xl q-ma-md shadow-3">
                <div class="q-ml-md text-h7 text-grey-9 text-bold">Datos del Cliente</div>
                  <div class="row q-pa-sm">
                    <div class="col-xs-12 col-sm-6 q-mb-lg col-md-6 col-lg-6">
                      <q-input v-model="form.email" type="email" label="Email" outlined disable dense/>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-input v-model="password" label="Contraseña" outlined dense
                        error-message="Ingrese una contraseña válida, mínimo 6 caracteres"
                        :error="$v.password.$error" @blur="$v.password.$touch()" />
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-input v-model="repeatPassword" label="Repita su Contraseña" outlined dense
                        error-message="Las contraseñas deben ser iguales"
                        :error="$v.repeatPassword.$error"
                        @blur="$v.repeatPassword.$touch()"
                      />
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-input v-model="form.full_name" label="Nombre" outlined dense
                        error-message="Ingrese su nombre"
                        :error="$v.form.full_name.$error" @blur="$v.form.full_name.$touch()"
                      />
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-input v-model="form.last_name" label="Apellido" outlined dense
                        error-message="Ingrese su nombre"
                        :error="$v.form.last_name.$error" @blur="$v.form.last_name.$touch()"
                      />
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-select v-model="form.country" label="País" outlined dense :options="['Colombia', 'Chile']" error-message="Ingrese su País" :error="$v.form.country.$error" @blur="$v.form.country.$touch()" />
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <q-input :disable="form.country ? false : true" v-model="form.run_dni" :label="form.country === 'Chile' ? 'Ingrese RUN' : form.country === 'Colombia' ? 'Ingrese DNI' : 'Debes seleccionar un país'" outlined dense
                          error-message="Ingrese RUN O DNI"
                          :error="$v.form.run_dni.$error" @blur="$v.form.run_dni.$touch()"
                        />
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-input v-model="form.direccion" label="Dirección" outlined dense
                        error-message="Ingrese su Dirección"
                        :error="$v.form.direccion.$error" @blur="$v.form.direccion.$touch()"
                      />
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-input v-model="form.phone" type="tel" label="Telefono" outlined dense
                        error-message="Ingrese el número de su Teléfono"
                        :error="$v.form.phone.$error" @blur="$v.form.phone.$touch()" />
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <q-file bottom-slots accept=".jpg, image/*" v-model="perfilFile" hint="Foto de Perfil" outlined label="" @input="test"
                          error-message="Debes subir una foto de perfil"
                          :error="$v.perfilFile.$error" @blur="$v.perfilFile.$touch()">
                          <template v-slot:prepend>
                            <q-avatar>
                              <img  :src="baseu + 'perfil' + form._id">
                            </q-avatar>
                          </template>
                          <template v-slot:append>
                            <q-icon name="close" color="negative" @click.stop="perfilFile = null" class="cursor-pointer" />
                          </template>
                        </q-file>
                    </div>
                  </div>
            <div class="row justify-center q-pa-sm">
                  <q-btn color="primary" label="Editar Perfil" @click="notifi = true, id = form._id , estatus = rol"/>
            </div>
          </q-card>
    </div>

    <div v-if="datosproveedor">
            <q-card class="bg-white full-width q-pa-xl q-ma-sm shadow-3">
                <div class="q-ml-md text-h7 text-grey-9 text-bold">Datos del Proveedor</div>
                  <div class="row q-pa-sm">
                    <div class="col-xs-12 col-sm-6 q-mb-lg col-md-6 col-lg-6">
                      <q-input v-model="form2.email" type="email" label="Email" outlined disable dense/>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-input v-model="password" label="Contraseña" outlined dense
                        error-message="Ingrese una contraseña válida, mínimo 6 caracteres"
                        :error="$v.password.$error" @blur="$v.password.$touch()" />
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-input v-model="repeatPassword" label="Repita su Contraseña" outlined dense
                        error-message="Las contraseñas deben ser iguales"
                        :error="$v.repeatPassword.$error"
                        @blur="$v.repeatPassword.$touch()"
                      />
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-input v-model="form2.full_name" label="Nombre de la Empresa" outlined dense
                        error-message="Ingrese el nombre de la Empresa"
                        :error="$v.form2.full_name.$error" @blur="$v.form.full_name.$touch()"
                      />
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-select v-model="form2.country" label="País" outlined dense :options="['Colombia', 'Chile']" error-message="Ingrese su País" :error="$v.form.country.$error" @blur="$v.form.country.$touch()" />
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <q-input :disable="form2.country ? false : true" v-model="form2.run_dni" :label="form2.country === 'Chile' ? 'Ingrese RUN' : form2.country === 'Colombia' ? 'Ingrese DNI' : 'Debes seleccionar un país'" outlined dense
                          error-message="Ingrese RUN O DNI"
                          :error="$v.form2.run_dni.$error" @blur="$v.form2.run_dni.$touch()"
                        />
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-input v-model="form2.direccion" label="Dirección" outlined dense
                        error-message="Ingrese su Dirección"
                        :error="$v.form2.direccion.$error" @blur="$v.form2.direccion.$touch()"
                      />
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-input v-model="form2.phone" type="tel" label="Telefono" outlined dense
                        error-message="Ingrese el número de su Teléfono"
                        :error="$v.form2.phone.$error" @blur="$v.form2.phone.$touch()" />
                    </div>

                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <q-toggle
                          v-model="form2.delivery"
                          label="Activar delivery"
                          icon="delivery_dining"
                        />
                     </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-file bottom-slots accept=".jpg, image/*" v-model="perfilFile" outlined label="Foto perfil de la tienda" @input="test"
                        error-message="Ingrese una foto de perfil para su tienda"
                        :error="$v.perfilFile.$error" @blur="$v.perfilFile.$touch()">
                        <template v-slot:prepend>
                          <q-avatar>
                            <img  :src="baseu + 'perfil' + form2._id">
                          </q-avatar>
                        </template>
                        <template v-slot:append>
                          <q-icon name="close" color="negative" @click.stop="perfilFile = null" class="cursor-pointer" />
                        </template>
                      </q-file>
                    </div>
                    <q-card style="width: 100%" class="shadow-11 q-mt-sm">
                      <q-card-section>
                        <div>Agrega fotos de la tienda</div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 row justify-between">
                        <div class="col-10">
                            <q-file max-files="5" style="width: 100%" @input="tienda" accept=".jpg, image/*" multiple append v-model="tiendaFiles" hint="Pueden ser hasta 5 fotos" outlined label="CLICK AQUÍ">
                            </q-file>
                        </div>
                        <div class="col-2 row justify-center">
                          <q-icon size="md" name="close" color="negative" @click="tiendaFiles = [], imgTienda = []" class="cursor-pointer" />
                        </div>
                      </div>
                      </q-card-section>
                    </q-card>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mt-md">
                      <q-select outlined v-model="form2.dias" :options="options_dias" label="Días laborables" multiple emit-value map-options
                        error-message="Ingrese los días laborables de la empresa"
                        :error="$v.dias.$error" @blur="$v.dias.$touch()"
                       >
                        <template v-slot:option="{ itemProps, itemEvents, opt, selected, toggleOption }">
                          <q-item
                            v-bind="itemProps"
                            v-on="itemEvents"
                          >
                            <q-item-section>
                              <q-item-label v-html="opt.label" ></q-item-label>
                            </q-item-section>
                            <q-item-section side>
                              <q-checkbox :value="selected" @input="toggleOption(opt)" />
                            </q-item-section>
                          </q-item>
                        </template>
                      </q-select>
                  </div>
                    <div class="text-subtitle2 q-mt-sm">Horario</div>
                    <div class="q-gutter-sm row justify-between">
                      <q-input label="Hora de inicio" class="col-5" v-model="form2.hora_inicio" mask="time" :rules="['time']"
                        error-message="Ingrese la hora de inicio laboral"
                        :error="$v.form2.hora_inicio.$error" @blur="$v.form2.hora_inicio.$touch()" >
                        <template v-slot:append>
                          <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy transition-show="scale" transition-hide="scale">
                              <q-time v-model="form2.hora_inicio">
                                <div class="row items-center justify-end">
                                  <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                              </q-time>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>

                      <q-input label="Hora de cierre" class="col-5" v-model="form2.hora_fin" mask="time" :rules="['time']"
                        error-message="Ingrese la hora de cierre laboral"
                        :error="$v.form2.hora_fin.$error" @blur="$v.form2.hora_fin.$touch()">
                        <template v-slot:append>
                          <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy transition-show="scale" transition-hide="scale">
                              <q-time v-model="form2.hora_fin">
                                <div class="row items-center justify-end">
                                  <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                              </q-time>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>

                    </div>
                  </div>
              <div class="row justify-center q-pa-sm">
                  <q-btn color="primary" label="Editar Perfil" @click="notifi = true, id = form2._id , estatus = rol"/>
              </div>
           </q-card>

    </div>
    <q-dialog v-model="notifi" >
      <q-card style="width: 300px">
        <q-card-section>
          <div v-if="estatus === 3" class="text-h6">¿Estas seguro de Actualizar los datos?
            <div class="q-mt-md q-ml-sm text-caption text-grey-9">"Atencion" si a modificado campos distintos al de contraseña, implicaria que el estatus de su cuenta caiga en revision hasta que el admin apruebe los cambios</div>
          </div>
            <div v-if="estatus === 2" class="text-h6">¿Estas seguro de Actualizar los datos?</div>
        </q-card-section>

        <q-card-section class="q-pa-md row justify-center items-center">
          <q-btn v-if="estatus === 3" class="q-ma-sm" label="Actualizar" color="primary" @click="modificar_datosproveedor()" push v-close-popup />
          <q-btn v-if="estatus === 2" class="q-ma-sm" label="Actualizar" color="primary" @click="modificar_datos()" push v-close-popup />
          <q-btn class="q-ma-sm" label="Cerrar" color="grey" v-close-popup />
        </q-card-section>
      </q-card>
      </q-dialog>
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
      form2: {},
      espejo: {},
      repeatPassword: '',
      password: '',
      notifi: false,
      perfilFile: null,
      imgPerfil: '',
      baseu: '',
      baseu2: '',
      usuario: {},
      rol: null,
      dias: [],
      tiendaFiles: [],
      imgTienda: [],
      estatus: 8,
      var: false,
      id: '',
      options_dias: [
        {
          label: 'Lunes',
          value: 1
        },
        {
          label: 'Martes',
          value: 2
        },
        {
          label: 'Miércoles',
          value: 3
        },
        {
          label: 'Jueves',
          value: 4
        },
        {
          label: 'Viernes',
          value: 5
        },
        {
          label: 'Sábado',
          value: 6
        },
        {
          label: 'Domingo',
          value: 0
        }
      ]
    }
  },
  mounted () {
    this.getUser()
    this.baseu = env.apiUrl + '/perfil_img/'
    this.baseu2 = env.apiUrl + '/tienda_img/'
  },
  validations () {
    return {
      form: {
        full_name: { required, maxLength: maxLength(40) },
        last_name: { required },
        country: { required },
        direccion: { required },
        run_dni: { required },
        phone: { required }
      },
      form2: {
        full_name: { required, maxLength: maxLength(40) },
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
        }
        if (this.rol === 3) {
          this.datosproveedor = true
          this.form2 = v
          this.espejo = v
        }
        if (this.rol === 2) {
          this.form = v
          this.datosusuario = true
        }
      })
    },
    modificar_datos () {
      this.$v.form.$touch()
      if (this.password) {
        if (!this.$v.form.$error && !this.$v.password.$error && !this.$v.repeatPassword.$error) {
          this.form.password = this.password
          this.$api.put('datosnew/' + this.id, this.form).then(res => {
            if (res) {
              this.$q.notify({
                message: 'Datos Modificados con exito',
                color: 'positive'
              })
            }
          })
        } else {
          this.$q.notify({
            message: 'las contraseñas no son iguales',
            color: 'negative'
          })
        }
      } else {
        if (!this.password) {
          if (!this.$v.form.$error) {
            this.$api.put('datosnew/' + this.id, this.form).then(res => {
              if (res) {
                this.$q.notify({
                  message: 'Datos Modificados con exito',
                  color: 'positive'
                })
              }
            })
          }
        }
      }
    },

    modificar_datosproveedor () {
      this.$v.form2.$touch()
      if (this.password) {
        if (!this.$v.form2.$error && !this.$v.password.$error && !this.$v.repeatPassword.$error) {
          this.form2.password = this.password
          this.$api.put('datosnew/' + this.id, this.form2).then(res => {
            if (res) {
              this.$q.notify({
                message: 'Datos Modificados con exito',
                color: 'positive'
              })
            }
          })
        } else {
          this.$q.notify({
            message: 'Verifica los datos',
            color: 'negative'
          })
        }
      } else {
        this.$v.form2.$touch()
        if (!this.password) {
          if (!this.$v.form2.$error) {
            this.$api.put('datosnew/' + this.id, this.form2).then(res => {
              if (res) {
                this.$q.notify({
                  message: 'Datos Modificados con exito',
                  color: 'positive'
                })
              }
            })
          } else {
            this.$q.notify({
              message: 'Verifica los datos',
              color: 'negative'
            })
          }
          /* if () {
            this.$api.put('update_status/' + this.id, { status: 0 }).then(res => {
              if (res) {
                this.getProveedores()
              }
            })
          } */
        }
      }
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
