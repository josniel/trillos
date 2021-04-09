<template>
<div>
    <div v-if="listado === 'one'">
      <div class="row q-gutter-md q-ma-sm">
        <q-card v-for="(img, index) in data" class="shadow-13 bg-secondary q-mt-lg" style="border-radius:12px;width: 150px" :key="index" @click="(ruta === 'cliente') || (ruta === 'tienda') ? $router.push('/descripcionproducto/' + img._id) : $router.push('/descripcionsolicitud/' + img._id)">
          <q-img :src="img.fileName ? baseu + '/' + img.fileName : img.images ? baseu + '/' + img.images[0] : 'noimgpro.png'" spinner-color="white" style="height: 190px; width: 150px" >
            <div v-if="direccion" class="row absolute-bottom" style="width:100%">
              <q-icon class="col-1" name="room" color="blak" style="font-size: 1.5rem;"/>
              <div class="q-pl-sm q-pt-xs text-caption">{{img.direccion}}</div>
            </div>
          </q-img>
          <q-scroll-area horizontal style="height: 25px" class="q-ma-xs" >
          <div class="text-subtitle1 text-center">{{img.name}}</div>
          </q-scroll-area>
        </q-card>
      </div>
    </div>
    <div v-else>
    <q-list separator class="q-pa-md q-gutter-md">
      <q-item class="bordes row q-pl-md q-py-sm q-pr-xs" v-for="(img, index) in data" :key="index">
        <q-item-section thumbnail>
          <div clickable v-ripple @click="(ruta === 'cliente') || (ruta === 'tienda') ? $router.push('/descripcionproducto/' + img._id) : $router.push('/descripcionsolicitud/' + img._id)">
            <img class="q-ml-xs" :src="img.fileName ? baseu + '/' + img.fileName : img.images ? baseu + '/' + img.images[0] : 'noimgpro.png'" style="height:80px; width:100px" />
          </div>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-caption q-pl-sm">Nombre: <strong>{{img.name}}</strong> </q-item-label>
          <q-item-label v-if="img.direccion" class="text-caption q-pl-sm">Direccion: <strong>{{img.direccion}}</strong> </q-item-label>
          <q-item-label v-if="img.chat_info" class="text-caption q-pl-sm">Estatus: <strong>{{img.chat_info.status}}</strong> </q-item-label>
        </q-item-section>
        <q-separator vertical color="black" />
          <div class="column justify-around" v-if="soy === 'proveedor'">
            <q-btn round flat color="white" size="sm" text-color="black" icon="edit" @click="editProduct(img._id)" />
            <q-separator color="black" />
            <q-btn round flat color="white" size="sm" text-color="red" icon="delete" @click="deleteProduct(img._id)" />
          </div>
          <div v-else class="column justify-around">
            <q-btn round flat color="white" size="sm" text-color="red" icon="delete" @click="deleteSoli(img._id)" />
          </div>
      </q-item>
      </q-list>
    </div>

  </div>
</template>

<script>
import env from '../env'
export default {
  props: ['data', 'ruta', 'direccion', 'listado', 'soy'],
  data () {
    return {
      baseu: ''
    }
  },
  mounted () {
    if (this.ruta === 'cliente' || this.ruta === 'tienda') {
      this.baseu = env.apiUrl + '/productos_img'
    } else {
      this.baseu = env.apiUrl + '/necesidad_img'
    }
  },
  methods: {
    deleteSoli (id) {
      this.$q.dialog({
        title: 'Confirma',
        message: '¿Seguro deseas eliminar esta solicitud?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$api.delete('necesidad/' + id).then(res => {
          if (res) {
            this.$q.notify({
              color: 'positive',
              message: 'Eliminado Correctamente'
            })
            this.$emit('actualizarData')
          }
        })
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    radio (id) {
      this.$q.dialog({
        title: '¿Desea cambiar el Estatus?',
        message: 'elija una opcion:',
        options: {
          type: 'radio',
          model: 'opt1',
          // inline: true
          items: [
            { label: 'Aprobado', value: 'opt1' },
            { label: 'Cotizado', value: 'opt2' },
            { label: 'Rechazado', value: 'opt3' }
          ]
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        // console.log('>>>> OK, received', data)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    editProduct (id) {
      this.$router.push('/editar_productoprove/' + id)
    },
    deleteProduct (id) {
      this.$q.dialog({
        title: 'Confirma',
        message: '¿Seguro deseas eliminar este producto?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$api.delete('producto/' + id).then(res => {
          if (res) {
            this.$q.notify({
              color: 'positive',
              message: 'Eliminado Correctamente'
            })
            this.$emit('actualizarData')
          }
        })
      }).onCancel(() => {
        // console.log('>>>> Cancel')
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
