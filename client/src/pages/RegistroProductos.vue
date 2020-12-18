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
    <div class="row">
      <div class="q-mt-lg q-ml-sm q-mb-sm text-subtitle2">Agregar Foto</div>
      <div>
        <q-btn class="q-mt-md q-ml-lg q-mb-sm" color="primary" text-color="white" glossy unelevated icon="camera_enhance" label="Subir" />
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
      ]
    }
  },
  validations: {
    form: {
      name: { required, minLength: minLength(3), maxLength: maxLength(50) },
      description: { required, minLength: minLength(1), maxLength: maxLength(200) },
      cantidad: { required, minLength: minLength(1), maxLength: maxLength(10) },
      categoria_id: { required }
    }
  },
  mounted () {
    this.obtenerDatos()
  },
  methods: {
    agregar () {
      console.log(this.form, 'aaaaaaaaaaaaaaaaaaaaaaaaa')
      this.$v.$touch()
      if (!this.$v.form.$error) {
        this.$api.post('producto', this.form).then(res => {
          if (res) {
            console.log('ejecutado o guardado correctamente')
            this.$router.push('/inicio')
          }
        })
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

<style>

</style>
