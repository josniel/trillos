<template>
  <div class="row justify-center">
    <div v-if="cotizarBtn" class="row justify-end full-width q-pa-sm">
      <q-btn no-caps class="shadow-11" color="primary" text-color="black" label="Cotizar" @click="dialog = true" />
    </div>
    <q-separator v-if="cotizarBtn" />

    <q-dialog v-model="dialog" transition-show="slide-up" transition-hide="slide-down" >
      <enviar-cotizacion />
    </q-dialog>

    <div class="q-pa-sm">
      <q-chat-message
        :label="date"
      />
      <q-chat-message
        v-for="mens in this.data.messages" :key="mens.id"
        :name="mens.full_name"
        :text="[mens.message]"
        :stamp="mens.stamp"
        :sent="mens.send"
        :bg-color="mens.send ? 'primary' : 'grey-4'"
        :text-color="mens.send ? 'white' : 'black'"
        size="6"
      />
      <div id="fin"></div>
    </div>

    <q-footer elevated class="bg-white row">
        <q-input
           @keyup.enter="sendChat()"
            v-model="text"
            placeholder="Mensaje..."
            class="q-pa-sm col-10"
            bg-color="yellow-2"
            autogrow
            outlined
            :disable="deshabilitarMsg"
            />
        <q-icon href="#fin" @click="sendChat()" size="40px" name="send" color="primary" class="col-2" />
    </q-footer>
  </div>
</template>
<script>
import moment from 'moment'
import EnviarCotizacion from '../components/EnviarCotizacion'
export default {
  components: {
    EnviarCotizacion
  },
  data () {
    return {
      id: this.$route.params.id,
      text: '',
      deshabilitarMsg: false,
      cotizarBtn: true,
      dialog: false,
      form: {},
      solicitud: {},
      info: {},
      date: moment().format('DD-MMMM-YYYY'),
      data: {
        datos_proveedor: {
          full_name: 'Proveedor'
        },
        datos_cliente: {
          full_name: 'Cliente'
        }
      }
    }
  },
  mounted () {
    this.cargarSolicitud()
  },
  methods: {
    cargarSolicitud () {
      this.$api.get('necesidad/' + this.id).then(res => {
        if (res) {
          this.solicitud = res
          console.log('solicitud', this.solicitud)
          if (this.solicitud) {
            this.$api.get('user_by_id/' + this.solicitud.ownerId).then(v => {
              this.info = v
              console.log('Informacion', this.info)
            })
          }
        }
      })
    },
    sendChat () {
      if (this.text !== '') {
        console.log(this.text)
      }
    }
  }
}
</script>
