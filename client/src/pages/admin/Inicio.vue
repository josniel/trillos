<template>
  <div>
   <div class="q-mt-lg text-center q-pa-md bg-secondary text-grey-1 q-ma-md" style="border-radius:12px">BIENVENIDO</div>
   <div class="row estilo-titulos q-mt-lg q-ml-sm q-mb-sm q-pl-sm">
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <q-icon class="q-mt-xs" name="stop_circle" style="font-size: 0.6em"/>
      <div class="text-bold q-ml-sm">MIS ACCIONES</div>
    </div>

    <div class="q-pa-sm">
      <q-card v-ripple class="q-pa-sm q-my-md bordes" >
        <q-item>
          <q-item-section avatar>
            <q-avatar icon="store" class="text-primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-primary text-h6">Proveedores</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="arrow_right" color="primary" />
          </q-item-section>
        </q-item>
      </q-card>

      <q-card v-ripple class="q-pa-sm q-my-md bordes" >
        <q-item>
          <q-item-section avatar>
            <q-avatar icon="person" class="text-primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-primary text-h6">Clientes</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="arrow_right" color="primary" />
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border-left: 6px solid $primary;
  background-color: rgba(202, 202, 202, 0.474);
  border-radius: 12px;
}
</style>>
