<template>
  <div>
    <q-card class="shadow-2 q-pa-sm q-ma-md">
      <q-card-section>
        <div class="text-h6 row justify-center">Registro</div>
        <div class="text-subtitle2 row justify-center">Ingrese sus Datos</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="row">
          <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pb-md">
            <q-input class="q-mr-xs" v-model="form.name" outlined label="Ingrese Nombres"/>
          </div>
          <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pb-md">
            <q-input class="q-mr-xs" v-model="form.lastName" outlined label="Ingrese Apellidos"/>
          </div>
          <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pb-md">
            <q-input class="q-mr-xs" v-model="form.email" type="email" outlined label="Ingrese Correo"/>
          </div>
          <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pb-md">
            <q-input class="q-mr-xs" v-model="password" :type="isPwd ? 'password' : 'text'" outlined label="Ingrese Contraseña">
              <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
                </template>
            </q-input>
          </div>
          <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pb-md">
            <q-input class="q-mr-xs" v-model="repeatPassword" :type="isPwd ? 'password' : 'text'" outlined label="Repetir Contraseña">
              <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
                </template>
            </q-input>
          </div>
        </div>
      </q-card-section>
        <div class="row">
          <div class="q-ml-xl">
            <q-btn outline color="primary" style="width: 120px" label="Atras" size="20px"/>
          </div>
          <q-space/>
          <div class="q-mr-xl">
            <q-btn class="glossy" color="primary" style="width: 120px" label="Siguiente" size="20px"/>
          </div>
        </div>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      password: '',
      repeatPassword: '',
      isPwd: true
    }
  }

}
</script>

<style>

</style>
