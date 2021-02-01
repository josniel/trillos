<template>
  <div>
    <q-separator inset />
    <div class="row justify-center">
        <div class="text-h6 q-ma-md text-center estilo-titulos">Datos de Perfil</div>
        <div v-if="datosusuario">
            <q-card class="bg-white full-width q-pa-xl q-ma-sm shadow-3">
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
                              <img  :src="imgPerfil ? imgPerfil : 'favicon.ico'">
                            </q-avatar>
                          </template>
                          <template v-slot:append>
                            <q-icon name="close" color="negative" @click.stop="perfilFile = null" class="cursor-pointer" />
                          </template>
                        </q-file>
                    </div>
                  </div>
            <div class="row justify-center q-pa-sm">
                <q-btn color="primary" label="Actualizar Datos" @click="modificar_datos(id_datos)"/>
            </div>
          </q-card>
    </div>

    <div v-if="datosproveedor">
            <q-card class="bg-white full-width q-pa-xl q-ma-sm shadow-3">
                <div class="q-ml-md text-h7 text-grey-9 text-bold">Datos del Proveedor</div>
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
                      <q-input v-model="form.full_name" label="Nombre de la Empresa" outlined dense
                        error-message="Ingrese su nombre"
                        :error="$v.form.full_name.$error" @blur="$v.form.full_name.$touch()"
                      />
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <q-select v-model="form.country" label="País" outlined dense :options="['Colombia', 'Chile']" error-message="Ingrese su País" :error="$v.form.country.$error" @blur="$v.form.country.$touch()" />
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
                      <q-file bottom-slots accept=".jpg, image/*" v-model="perfilFile" outlined label="Foto perfil de la tienda" @input="test"
                        error-message="Ingrese una foto de perfil para su tienda"
                        :error="$v.perfilFile.$error" @blur="$v.perfilFile.$touch()">
                        <template v-slot:prepend>
                          <q-avatar>
                            <img  :src="imgPerfil ? imgPerfil : 'favicon.ico'">
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
                <q-file max-files="5" style="width: 100%" @input="tienda" accept=".jpg, image/*" multiple append v-model="form.tiendaFiles" hint="Pueden ser hasta 5 fotos" outlined label="CLICK AQUÍ">
                </q-file>
            </div>
            <div class="col-2 row justify-center">
              <q-icon size="md" name="close" color="negative" @click="tiendaFiles = [], imgTienda = []" class="cursor-pointer" />
            </div>
          </div>
          </q-card-section>
          <q-separator />
          <q-card-section class="row justify-around">
            <div v-if="!imgTienda.length" class="text-subtitle2 text-grey text-center">No hay fotos de la tienda</div>
            <div v-else v-ripple v-for="(item, index) in imgTienda" :key="index" class="col-5 q-pa-sm">
              <q-img
                :src="imgTienda.length > 0 ? imgTienda[index] : 'favicon.ico'"
                style="width:120px"
              />
            </div>
          </q-card-section>
        </q-card>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mt-md">
          <q-select
            outlined
            v-model="form.dias"
            :options="options_dias"
            label="Días laborables"
            multiple
            emit-value
            map-options
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
          <q-input label="Hora de inicio" class="col-5" v-model="form.hora_inicio" mask="time" :rules="['time']"
            error-message="Ingrese la hora de inicio laboral"
            :error="$v.form.hora_inicio.$error" @blur="$v.form.hora_inicio.$touch()" >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="form.hora_inicio">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input label="Hora de cierre" class="col-5" v-model="form.hora_fin" mask="time" :rules="['time']"
            error-message="Ingrese la hora de cierre laboral"
            :error="$v.form.hora_fin.$error" @blur="$v.form.hora_fin.$touch()">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="form.hora_fin">
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
                <q-btn color="primary" label="Actualizar Datos" @click="modificar_datos(form._id)"/>
            </div>
          </q-card>
    </div>
    </div>
  </div>
</template>
<script>
import { required, maxLength, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      datosusuario: false,
      datosproveedor: false,
      form: {},
      repeatPassword: '',
      password: '',
      perfilFile: null,
      imgPerfil: '',
      baseu: '',
      usuario: {},
      rol: null,
      dias: [],
      tiendaFiles: [],
      imgTienda: [],
      id_datos: '',
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
    test () {
      if (this.perfilFile) { this.imgPerfil = URL.createObjectURL(this.perfilFile) }
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
