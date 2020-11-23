<template>
  <div>
    <q-card class="absolute-center" style="width: 400px">
        <q-card-section class="q-ma-lg">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="q-pa-md row justify-center">
              <q-img :src="url" spinner-color="white" style="height: 140px; max-width: 150px"/>
            </div>
            <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pb-md">
              <q-input v-model="form.email" type="email" hint="Ingrese su email" />
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <q-input v-model="form.password" :type="isPwd ? 'password' : 'text'" hint="Ingrese su contraseña">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
                </template>
              </q-input>
            </div>
            <div class="q-mt-md row justify-center">
               <q-btn color="primary" text-color="white" label="Iniciar Sesión" @click="loguear"/>
            </div>
            <div class="q-mt-sm row justify-center">
               <q-btn flat color="primary" label="Registrarse aqui" @click="$router.push('/registro')"/>
            </div>
          </div>
        </q-card-section>
      </q-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      form: {
      },
      isPwd: true,
      url: 'https://placeimg.com/500/300/nature'
    }
  },
  methods: {
    ...mapMutations('generals', ['login']),
    loguear () {
      this.$q.loading.show({
        message: 'Iniciando sesión'
      })
      this.$api.post('login', this.form).then(res => {
        if (res) { // Se debe ejecutar una mutacion que modifique el state con sessionInfo
          const client = res.TRI_SESSION_INFO.roles.find(value => value === 2)
          if (!client) {
            this.login(res)
            this.$router.push('/inicio')
          } else {
            this.login(res)
            this.$router.push('/inicio')
          }
        } else {
          console.log('error de ususario')
          // this.loading = false
        }
        this.$q.loading.hide()
      })
    }
  }

}
</script>

<style>

</style>
