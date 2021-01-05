<template>
  <div class="q-pa-md">
    <div class="q-mt-sm q-mb-sm text-subtitle2 q-pl-sm">Registro de Productos</div>
    <q-input rounded outlined bg-color="yellow-2" v-model="form.name" label="Nombre" dense :error="$v.form.name.$error" error-message="Este campo es requerido"  @blur="$v.form.name.$touch()"/>
    <div class="q-mt-lg q-mb-sm text-subtitle2 q-pl-sm">Categoria</div>
    <div class="row justify-around">
      <q-btn v-for="(item, index) in categorias" push :color="item.select === false ? 'white' : 'primary'" :text-color="item.select === false ? 'black' : 'white'" round :icon="item.icons" class="q-mt-sm q-mr-sm q-ml-sm" :key="index" @click="seleccionarcategoria(index)" />
    </div>
    <div class="q-mt-lg q-mb-sm text-subtitle2 q-pl-sm">Descripcion</div>
      <q-input rounded outlined bg-color="yellow-2" v-model="form.description" type="textarea" :error="$v.form.description.$error" error-message="Este campo es requerido"  @blur="$v.form.description.$touch()"/>
    <div class="row">
      <div class="q-mt-lg q-ml-sm q-mb-sm text-subtitle2">Cantidad</div>
      <div class="q-mt-md q-ml-xl q-mb-sm">
        <q-input bg-color="primary" v-model.number="form.cantidad" type="number" dense :error="$v.form.cantidad.$error" error-message="Este campo es requerido"  @blur="$v.form.cantidad.$touch()"/>
      </div>
    </div>
    <div class="row items-center">
      <div class="q-mt-lg q-ml-sm q-mb-sm text-subtitle2">Agregar Foto</div>
      <div class="q-ml-md q-mt-lg row">
        <q-file label="Click aqui" dense class="q-pa-sm" bg-color="yellow-2" style="width:200px" v-model="file" accept=".jpg, image/*" @input="changeFile">
          <template v-slot:before>
            <q-avatar size="60px" square>
              <q-img :src="imgPro ? imgPro : 'noimgpro.png'" />
            </q-avatar>
          </template>
        </q-file>
      </div>
    </div>
    <div class="row justify-center q-ma-lg">
      <q-btn color="primary" text-color="white" label="Agregar Producto" @click="agregar"/>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {},
      categorias: [
      ],
      file: null,
      imgPro: null
    }
  },
  validations: {
    form: {
      name: { required, minLength: minLength(3), maxLength: maxLength(50) },
      description: { required, minLength: minLength(1), maxLength: maxLength(200) },
      cantidad: { required, minLength: minLength(1), maxLength: maxLength(10) },
      categoria_id: { required }
    },
    file: { required }
  },
  mounted () {
    this.obtenerDatos()
  },
  methods: {
    changeFile () {
      if (this.file) { this.imgPro = URL.createObjectURL(this.file) }
      console.log(this.imgPro)
    },
    async agregar () {
      console.log(this.form, 'aaaaaaaaaaaaaaaaaaaaaaaaa')
      this.$q.loading.show({
        message: 'Subiendo Producto, Por Favor Espere...'
      })
      this.$v.$touch()
      if (!this.$v.form.$error) {
        if (this.file) {
          var formData = new FormData()
          var files = []
          files[0] = this.file
          formData.append('files', files[0])
          formData.append('dat', JSON.stringify(this.form))
          await this.$api.post('producto', formData, {
            headers: {
              'Content-Type': undefined
            }
          }).then((res) => {
            this.$q.loading.hide()
            this.$router.push('/inicio_proveedor')
          })
        }
      }
    },
    obtenerDatos () {
      this.$api.get('categoria').then(res => {
        if (res) {
          var categoria = res
          this.categorias = categoria.map(v => {
            return {
              _id: v._id,
              icons: v.icons,
              select: false
            }
          })
          console.log(this.categorias, 'Aqui estan todas las categorias')
        }
      })
    },
    seleccionarcategoria (index) {
      var categoria = this.categorias
      var seleccionado = categoria.findIndex(v => v.select === true)
      console.log(categoria)
      if (seleccionado === -1) {
        categoria[index].select = true
        this.form.categoria_id = categoria[index]._id
      } else {
        categoria[seleccionado].select = false
        categoria[index].select = true
        this.form.categoria_id = categoria[index]._id
      }
    }
  }
}
</script>

<style lang="scss">
.button-camera {
  border-radius: 12px;
  border: 2px solid $secondary;
  width: 100px;
  height: 50px;
  background-color: $primary;
  font-size: 0px;
}
</style>
