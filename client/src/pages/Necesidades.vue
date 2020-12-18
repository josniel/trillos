<template>
 <div>
    <div class="q-mt-lg q-ml-md q-mb-sm text-bold q-pl-sm">¿QUE NECESITAS?</div>
    <div class="row justify-around">
      <q-btn v-for="(item, index) in categorias" push :color="item.select === false ? 'white' : 'primary'" :text-color="item.select === false ? 'black' : 'white'" round :icon="item.icons" class="q-mt-sm q-mr-sm q-ml-sm" :key="index" @click="seleccionarcategoria(index)" />
    </div>
    <q-select class="q-ma-md" color="grey" bg-color="yellow-2" filled v-model="form.ciudad" :options="ciudades" label="Ciudad"/>
    <q-select class="q-ma-md" color="grey" bg-color="yellow-2" filled v-model="form.necesidad" :options="options" label="Necesidad"/>
    <q-card class="q-pa-md shadow-up-4" style="border-radius:25px">
      <div class="text-h6 q-ml-md q-pt-xs">Descripción</div>
      <q-input borderless v-model="form.descripcion" type="textarea" />
      <div class="row justify-center q-pa-sm">
        <q-btn color="primary" label="Enviar Solicitud" @click="agregar"/>
      </div>
    </q-card>
 </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {},
      ciudades: [
        'Santiago', 'Concepcion', 'Viña del Mar', 'Temuco'
      ],
      options: [
        'Urgente', 'Medio', 'Prolongado'
      ],
      categorias: [
      ]
    }
  },
  validations: {
    form: {
      categoria_id: { required },
      ciudad: { required },
      necesidad: { required },
      descripcion: { required, minLength: minLength(1), maxLength: maxLength(200) }
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
        this.$api.post('necesidad', this.form).then(res => {
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
.color-select {
  background-color: #fff599
}
</style>
