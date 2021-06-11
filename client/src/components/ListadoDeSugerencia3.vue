<template>
<div>
      <div class="q-pa-md q-gutter-y-xl">
        <q-card v-for="(item, index) in mapeando"  class="q-pa-xs" bordered :key="index" @click="(ruta === 'cliente') || (ruta === 'tienda') ? $router.push('/descripcionproducto/' + item._id) : $router.push('/descripcionsolicitud/' + item._id)">
            <div class="absolute-top-right">Fecha de Solicitud {{item.fechaCreacion}} </div>
              <div class="column items-center justify-center">
                <div class="text-center text-white q-mt-lg text-h6" :class="`bg-${item.colorRadio}`" style="width:100%">{{item.name}} </div>
              </div>
              <div class="column items-center justify-center">
                <div class="row">
                  <div class="q-pa-sm">
                    <q-avatar size="100px">
                      <img :src="baseu3 + 'perfil' + item.creador._id">
                    </q-avatar>
                  </div>
                  <div class="colum q-mt-md">
                    <div class="row">
                      <q-icon size="sm" name="person" />
                      <div class="text-bold text-grey">{{item.creador.full_name}} {{item.creador.last_name}}</div>
                    </div>
                    <div class="row q-mt-sm">
                      <q-icon size="sm" name="phone" />
                      <div class="text-bold text-grey">{{item.creador.phone}}</div>
                    </div>
                    <div class="row q-mt-sm">
                      <q-icon size="sm" name="clean_hands" />
                      <div class="text-bold text-grey">{{item.categorianame.name}}</div>
                    </div>
                  </div>
                </div>
                <div class="text-h7 text-bold q-mt-sm">Descripcion del servicio</div>
                <div >
                  <q-scroll-area style="height: 70px; width: 200px;">
                    <div class="text-center text-grey">{{item.descripcion}}</div>
                  </q-scroll-area>
                </div>
                <div class="row q-mt-md">
                  <div class="text-h7 q-mt-xs text-grey">Urgencia requerimiento:</div>
                  <div class="q-pl-lg row">
                    <q-radio v-model="item.colorRadio" keep-color size="xs" val="red" color="red" />
                    <q-radio v-model="item.colorRadio" keep-color size="xs" val="orange" color="orange" />
                    <q-radio v-model="item.colorRadio" keep-color size="xs" val="blue" color="blue" />
                  </div>
                </div>
              </div>
              <div class="row q-pl-lg">
                <q-icon size="sm" name="location_on" />
                <div class="text-h7 text-grey">{{item.direccion}}</div>
              </div>

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
      baseu3: '',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      color: 'blue'
    }
  },
  mounted () {
    if (this.ruta === 'cliente' || this.ruta === 'tienda') {
      this.baseu = env.apiUrl + '/productos_img'
    } else {
      this.baseu = env.apiUrl + '/necesidad_img'
      this.baseu3 = env.apiUrl + '/perfil_img/'
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
