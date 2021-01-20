<template>
  <div class="row justify-center">
    <div v-if="cotizarBtn === 1 || cotizarBtn === 2" class="row justify-end full-width q-pa-sm">
      <q-btn no-caps class="shadow-11" color="primary" text-color="black" label="Cotizar" @click="dialog = true" />
    </div>
    <q-separator v-if="cotizarBtn === 1 || cotizarBtn === 2" />

    <q-dialog v-model="dialog" transition-show="slide-up" transition-hide="slide-down" >
      <enviar-cotizacion />
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
      user: {},
      deshabilitarMsg: false,
      cotizarBtn: 0,
      dialog: false,
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
          this.user = v
          if (v.roles[0] === 3) {
            this.cotizarBtn = 1
          }
        }
      })
    },
    getinfo () {
      this.$api.get('show_all_info_cotization/' + this.id).then(v => {
        if (v) {
          console.log('v', v)
          if (v.status > 0) {
            this.deshabilitarMsg = true
            this.$q.dialog({
              title: '¡Atención!',
              message: 'Este chat esta deshabilitado, la cotizacion ya ha sido aprobada,cotizada o rechazada por el cliente. Podra ver los mensajes pero no puede cotizar ni enviar mensajes en este chat'
            }).onOk(() => {

            })
          }
          this.data = v
          console.log('data', this.data)
        }
      })
    },
    sendChat () {
      if (this.text !== '') {
        this.$api.post('send_message/' + this.id, { message: this.text }).then(res => {
          this.text = ''
          this.$api.get('show_all_info_cotization/' + this.id).then(v => {
            if (v) {
              console.log('v', v)
              this.data.messages = v.messages
            }
          })
        })
      }
    }
  }
}
</script>
