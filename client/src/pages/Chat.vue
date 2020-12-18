<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        :text="['doing fine, how r you?']"
      />
    </div>
    <div style="position:absolute;bottom:11%" class="full-width q-pa-sm" >
      <q-input outlined bg-color="yellow-2" label="Enviar Mensaje" v-model="form.enviar" dense >
        <template v-slot:after>
          <q-btn round dense flat icon="send" color="primary" />
        </template>
      </q-input>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {}
    }
  }
}
</script>
