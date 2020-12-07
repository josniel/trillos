<template>
  <div>
      <q-img src="aciento.jpg" spinner-color="white" style="height: 250px; width: 100%"/>
      <q-card class="q-pa-md bg-secondary" style="border-radius:25px">
          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1 text-weight-bolder">NOMBRE DEL PRODUCTO</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <div class="row">
                <q-icon name="star" color="yellow" style="font-size: 2rem;"/>
                <q-item-label class="q-mt-sm text-subtitle1 text-weight-bolder">9.0</q-item-label>
              </div>
            </q-item-section>
          </q-item>
      </q-card>
      <q-card class="q-pa-md shadow-up-4" style="border-radius:25px">
        <div class="text-subtitle2 q-ml-md q-pt-xs">Descripción</div>
        <div class="q-pa-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nisi aut, non quas amet, dolorem quis veniam vitae consequuntur nemo expedita dignissimos id esse perspiciatis minus. Molestiae, repellat? Quis, dignissimos.</div>
        <div class="row justify-center q-pa-sm">
          <q-btn color="primary" label="Agregar" icon-right="local_grocery_store"/>
        </div>
      </q-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>>
