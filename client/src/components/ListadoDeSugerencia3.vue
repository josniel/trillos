<template>
<div>
    <div class="q-mt-xs q-gutter-y-xl">
      <q-card v-for="(img, index) in mapeando"   bordered style="width: 100%;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="index" @click="(ruta === 'cliente') || (ruta === 'tienda') ? $router.push('/descripcionproducto/' + img._id) : $router.push('/descripcionsolicitud/' + img._id)">
          <q-card-section horizontal>
            <q-card-section>
              <div class="q-pt-md column items-center justify-center">
                <q-img
                  style="height: 90px;width: 120px"
                  class="rounded-borders"
                  :src="img.fileName ? baseu + '/' + img.fileName : img.images ? baseu + '/' + img.images[0] : 'noimgpro.png'" spinner-color="white"
                />
                <div class="text-overline">{{img.creador.full_name}}</div>
                </div>
              </q-card-section>

            <q-card-section class="q-pt-xs">
              <div class="text-h5 q-mt-sm q-mb-xs">{{img.name}}</div>
              <div class="column justify-center">
                <div class="text-caption text-grey">
                  {{img.descripcion}}
                </div>
                <div class="text-caption">nivel de requerimiento</div>
                <div class="row">
                  <q-radio v-model="img.colorRadio" keep-color size="xs" val="red" color="red" />
                  <q-radio v-model="img.colorRadio" keep-color size="xs" val="orange" color="orange" />
                  <q-radio v-model="img.colorRadio" keep-color size="xs" val="blue" color="blue" />
                </div>
                <div class="text-caption">{{img.direccion}}</div>
              </div>
            </q-card-section>

          </q-card-section>
      </q-card>
    </div>

  </div>
</template>

<script>
import env from '../env'
export default {
  props: ['data', 'ruta', 'direccion', 'listado'],
  data () {
    return {
      baseu: '',
      color: 'blue'
    }
  },
  mounted () {
    if (this.ruta === 'cliente' || this.ruta === 'tienda') {
      this.baseu = env.apiUrl + '/productos_img'
    } else {
      this.baseu = env.apiUrl + '/necesidad_img'
    }
  },
  computed: {
    mapeando () {
      return this.data.map(v => {
        return {
          ...v,
          colorRadio: v.necesidad === 'Urgente (1 a 3 Horas)' ? 'red' : v.necesidad === 'Medio (5 a 24 Horas)' ? 'orange' : 'blue'
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border-left: 6px solid $primary;
  background-color: rgba(202, 202, 202, 0.474);
  border-radius: 12px;
}
</style>
