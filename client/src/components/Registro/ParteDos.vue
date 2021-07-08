<template>
<div>
  <q-carousel class="window-height" animated v-model="slide" infinite ref="carousel">
    <q-carousel-slide :name="1" class="q-pa-none" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
      <div class="absolute-bottom custom-caption q-mb-md">
        <div class="row justify-center">
          <q-btn flat no-caps class="text-h4" color="white" @click="next()">Necesito un Taller</q-btn>
        </div>
        <div class="row justify-center">
          <div class="text-h5" color="white">Omitir, ir a la tienda</div>
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
  <!-- <div class="column">
    <animation-transition :animation-in-type="AnimationType.BOUNCEINDOWN" :animation-out-type="AnimationType.ROLLOUT">
      <div class="animated-body row justify-center" v-show="show">
        <img src="logo-400x400.png" alt="Logo" style="width: 90%;height:260px">
      </div>
    </animation-transition>
    <div class="row q-pa-sm">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <q-input
          v-model="form.email"
          type="email"
          label="Email"
          outlined
          dense
          error-message="Ingrese un email válido"
          :error="$v.form.email.$error"
          @blur="$v.form.email.$touch()"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <q-input
          :type="isPwd ? 'password' : 'text'"
          v-model="password"
          label="Contraseña"
          outlined
          dense
          error-message="Ingrese una contraseña válida, mínimo 6 caracteres"
          :error="$v.password.$error"
          @blur="$v.password.$touch()">
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer" color="primary" @click="isPwd = !isPwd" />
          </template>
        </q-input>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <q-input
          :type="isPwd2 ? 'password' : 'text'"
          v-model="repeatPassword"
          label="Repita su Contraseña"
          outlined
          dense
          error-message="Las contraseñas deben ser iguales"
          :error="$v.repeatPassword.$error"
          @blur="$v.repeatPassword.$touch()" >
          <template v-slot:append>
            <q-icon :name="isPwd2 ? 'visibility' : 'visibility_off'" class="cursor-pointer" color="primary" @click="isPwd2 = !isPwd2" />
          </template>
          </q-input>
      </div>
    </div>
    <div class="row">
      <q-btn @click="$router.push('/login')" color="primary" push label="Ya Tengo Cuenta" flat/>
      <q-space />
      <q-btn @click="next()" color="primary" push label="Siguiente" glossy/>
    </div>
    </div> -->
</div>
</template>

<script>
import { required, email, maxLength, minLength, sameAs } from 'vuelidate/lib/validators'
import { AnimationVueTransition, AnimationVueTransitionType } from 'vue-animation'
export default {
  components: {
    [AnimationVueTransition.name]: AnimationVueTransition
  },
  props: ['form', 'panel'],
  data () {
    return {
      slide: 1,
      repeatPassword: '',
      isPwd: true,
      isPwd2: true,
      password: '',
      AnimationType: AnimationVueTransitionType,
      show: false
    }
  },
  validations () {
    return {
      form: {
        full_name: { required, maxLength: maxLength(40) },
        email: { required, email }
      },
      repeatPassword: { sameAsPassword: sameAs('password') },
      password: { required, maxLength: maxLength(256), minLength: minLength(6) }
    }
  },
  mounted () {
    this.show = true
  },
  methods: {
    async next () {
      /* if (this.panel.panel === 'parte_dos') {
        this.$q.loading.show()
        this.$v.form.email.$touch()
        this.$v.password.$touch()
        this.$v.repeatPassword.$touch()
        if (!this.$v.form.email.$error && !this.$v.password.$error && !this.$v.repeatPassword.$error) {
          await this.$api.get('validate_email/' + this.form.email).then(res => {
            if (res) {
              this.form.password = this.password
              if (this.form.roles === 2) {
                this.panel.panel = 'parte_tres_cliente_datos'
              } else if (this.form.roles === 3) {
                this.panel.panel = 'parte_tres_proveedor_datos'
              }
            }
          })
        }
        this.$q.loading.hide()
      } */
      if (this.form.roles === 2) {
        this.panel.panel = 'parte_tres_cliente_datos'
      } else if (this.form.roles === 3) {
        this.panel.panel = 'parte_tres_proveedor_datos'
      }
    }
  }
}
</script>

<style>

</style>>
