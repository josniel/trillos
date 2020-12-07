<template>
  <div class="q-pa-md">
    <div class="q-mt-sm q-mb-sm text-subtitle2 q-pl-sm">Registro de Productos</div>
    <q-input rounded outlined bg-color="yellow-2" v-model="form.name" label="Nombre" dense/>
    <div class="q-mt-lg q-mb-sm text-subtitle2 q-pl-sm">Categoria</div>
    <botones-header/>
    <div class="q-mt-lg q-mb-sm text-subtitle2 q-pl-sm">Descripcion</div>
      <q-input rounded outlined bg-color="yellow-2" v-model="form.description" type="textarea"/>
    <div class="row">
      <div class="q-mt-lg q-ml-sm q-mb-sm text-subtitle2">Cantidad</div>
      <div class="q-mt-md q-ml-xl q-mb-sm">
        <q-input bg-color="primary" v-model.number="form.cantidad" type="number" dense/>
      </div>
    </div>
    <div class="row">
      <div class="q-mt-lg q-ml-sm q-mb-sm text-subtitle2">Agregar Foto</div>
      <div>
        <q-btn class="q-mt-md q-ml-lg q-mb-sm" color="primary" text-color="white" glossy unelevated icon="camera_enhance" label="Subir" />
      </div>
    </div>
    <div class="row justify-center q-ma-lg">
      <q-btn color="primary" text-color="white" label="Agregar Producto" />
    </div>
  </div>
</template>

<script>
import BotonesHeader from '../components/BotonesHeader.vue'
export default {
  components: { BotonesHeader },
  data () {
    return {
      form: {}
    }
  }
}
</script>

<style>

</style>
