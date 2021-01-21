<template>
  <div class="row justify-center">
    <div v-if="cotizarBtn" class="row justify-end full-width q-pa-sm">
      <q-btn no-caps class="shadow-11" color="primary" text-color="black" label="Cotizar" @click="cotizar = true" />
    </div>
    <q-separator v-if="cotizarBtn" />

    <q-dialog v-model="cotizar" transition-show="slide-up" transition-hide="slide-down" >
      <enviar-cotizacion :ruta="id" />
    </q-dialog>

    <q-dialog v-model="verCotizacion" transition-show="slide-up" transition-hide="slide-down" >
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Atención</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          El proveedor ha cotizado su solicitud.
        </q-card-section>

        <q-card-section class="row justify-center">
          <q-btn no-caps label="Ver Cotizacion" color="primary" @click="$router.push('/cotizacion/' + data.id_cotization)" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="q-pa-sm" style="width: 100%; max-width: 400px">
      <q-chat-message
        :label="date"
      />
      <q-chat-message
        v-for="mens in this.data.messages" :key="mens.id"
        :name="mens.full_name"
        :text="[mens.message]"
        :stamp="mens.stamp"
        :sent="mens.send"
        :bg-color="mens.send ? 'amber-7' : 'blue'"
        :text-color="mens.send ? 'black' : 'white'"
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
      rol: 0,
      deshabilitarMsg: false,
      cotizarBtn: true,
      cotizar: false,
      verCotizacion: false,
      form: {},
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
    this.getUser()
    this.getinfo()
  },
  methods: {
    getUser () {
      this.$api.get('user_info').then(v => {
        if (v) {
          this.rol = v.roles[0]
          if (this.rol === 2) {
            this.cotizarBtn = false
          }
        }
      })
    },
    getinfo () {
      this.$api.get('show_all_messages/' + this.id).then(v => {
        if (v) {
          this.data = v
          if (this.data.status === 'Cotizado' && this.rol === 2) {
            this.deshabilitarMsg = true
            this.cotizarBtn = false
            this.verCotizacion = true
          }
          if (this.data.status === 'Cotizado' && this.rol === 3) {
            this.deshabilitarMsg = true
            this.cotizarBtn = false
            this.$q.dialog({
              title: '¡Atención!',
              message: 'Este chat esta deshabilitado, la cotizacion ha sido enviada. Debe esperar por la respuesta del cliente.'
            }).onOk(() => {

            })
          }
          if (this.data.status === 'Rechazado') {
            this.deshabilitarMsg = true
            this.cotizarBtn = false
            this.$q.dialog({
              title: '¡Atención!',
              message: 'Este chat esta deshabilitado, la cotizacion ha sido rechazada. Podra ver los mensajes pero no interactuar en este chat.'
            }).onOk(() => {

            })
          }
        }
      })
    },
    sendChat () {
      if (this.text !== '') {
        this.$api.post('send_message/' + this.id, { message: this.text }).then(res => {
          this.text = ''
          this.$api.get('show_all_messages/' + this.id).then(v => {
            if (v) {
              this.data.messages = v.messages
            }
          })
        })
      }
    }
  }
}
</script>
