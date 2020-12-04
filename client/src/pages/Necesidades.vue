<template>
 <div>
    <div class="q-mt-lg q-ml-md q-mb-sm text-bold q-pl-sm">¿QUE NECESITAS?</div>
    <botones-header/>
    <q-select class="q-ma-md" color="grey" bg-color="yellow-2" filled v-model="model" :options="options" label="Ciudad"/>
    <q-select class="q-ma-md" color="grey" bg-color="yellow-2" filled v-model="model" :options="options" label="Necesidad"/>
    <q-card class="q-pa-md shadow-up-4" style="border-radius:25px">
      <div class="text-h6 q-ml-md q-pt-xs">Descripción</div>
      <div class="q-pa-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nisi aut, non quas amet, dolorem quis veniam vitae consequuntur nemo expedita dignissimos id esse perspiciatis minus. Molestiae, repellat? Quis, dignissimos.</div>
      <div class="row justify-center q-pa-sm">
        <q-btn color="primary" label="Enviar Solicitud" />
      </div>
    </q-card>
 </div>
</template>

<script>
import BotonesHeader from '../components/BotonesHeader.vue'
export default {
  components: { BotonesHeader }
}
</script>

<style>
.color-select {
  background-color: #fff599
}
</style>
