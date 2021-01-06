<template>
 <div>
    <div class="q-mt-lg q-ml-md q-mb-sm text-bold q-pl-sm">¿QUE NECESITAS?</div>
    <q-input class="q-mx-md" rounded outlined bg-color="yellow-2" v-model="form.name" label="Nombre de la solicitud" dense :error="$v.form.name.$error" error-message="Este campo es requerido"  @blur="$v.form.name.$touch()"/>
    <div class="q-mt-sm q-ml-md q-mb-sm text-bold q-pl-sm">Categoria</div>
    <div class="row justify-around">
      <q-btn v-for="(item, index) in categorias" push :color="item.select === false ? 'white' : 'primary'" :text-color="item.select === false ? 'black' : 'white'" round :icon="item.icons" class="q-mt-sm q-mr-sm q-ml-sm" :key="index" @click="seleccionarcategoria(item)" />
    </div>
    <q-input class="q-mx-md q-mt-md" outlined autogrow bg-color="yellow-2" v-model="form.direction" label="Ingrese Dirección" dense :error="$v.form.direction.$error" error-message="Este campo es requerido" @blur="$v.form.direction.$touch()" />
    <q-select class="q-mx-md q-mb-md" color="grey" bg-color="yellow-2" filled v-model="form.necesidad" :options="options" label="Tiempo del servicio" dense :error="$v.form.necesidad.$error" error-message="Este campo es requerido" @blur="$v.form.necesidad.$touch()"/>
    <q-card class="q-pa-md shadow-up-4" style="border-radius:25px">
      <div class="text-h6 q-ml-md q-pt-xs">Descripción</div>
      <q-input borderless v-model="form.descripcion" type="textarea" />
      <div class="row justify-center q-pa-sm">
        <q-btn color="primary" label="Enviar Solicitud" @click="agregar()"/>
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
      file: null,
      categoria_id: '',
      options: [
        'Urgente (1 a 3 Horas)', 'Medio (5 a 24 Horas)', 'Programado (2 días en adelante)'
      ],
      categorias: [
      ]
    }
  },
  validations: {
    form: {
      name: { required },
      direction: { required },
      necesidad: { required },
      descripcion: { required, minLength: minLength(1), maxLength: maxLength(200) }
    },
    categoria_id: { required }
  },
  mounted () {
    this.obtenerDatos()
  },
  methods: {
    agregar () {
      console.log('form', this.form)
      this.$v.$touch()
      if (this.$v.categoria_id.$error && !this.$v.form.$error) {
        this.$q.dialog({
          message: 'Debes seleccionar una categoria',
          persistent: true
        }).onOk(() => {
        })
      }
      if (!this.$v.categoria_id.$error && !this.$v.form.$error) {
        this.form.categoria_id = this.categoria_id
        this.$q.loading.show({
          message: 'Subiendo Solicitud, Por Favor Espere...'
        })
        var formData = new FormData()
        if (this.file) {
          this.form.buscar_file = true
          formData.append('files', this.file)
        } else {
          this.form.buscar_file = false
        }
        formData.append('dat', JSON.stringify(this.form))
        this.$api.post('necesidad', formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then(res => {
          this.$q.loading.hide()
          this.$router.push('/inicio_cliente')
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
    seleccionarcategoria (item) {
      this.categoria_id = item._id
      for (let i = 0; i < this.categorias.length; i++) {
        if (this.categorias[i]._id === this.categoria_id) {
          this.categorias[i].select = true
        } else {
          this.categorias[i].select = false
        }
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
