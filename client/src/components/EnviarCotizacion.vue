<template>
  <q-card class="q-ma-sm">
    <q-card-section>
      <div class="row justify-end">
        <q-btn icon="highlight_off" v-close-popup flat dense color="grey" />
      </div>
      <div class="text-primary text-center text-h6">* Cotización *</div>
      <div class="text-caption text-grey q-mt-lg">Agrega el servicio, la cantidad, el precio y agregalo</div>
      <div class="row q-mt-sm justify-around">
        <q-input class="col-5" v-model="add.serv" placeholder="Servicio" dense outlined rounded error-message="Requerido" :error="$v.add.serv.$error" @blur="$v.add.serv.$touch()"/>
        <q-input class="col-5" v-model.number="add.cant" placeholder="Cantidad" dense outlined rounded error-message="Requerido" :error="$v.add.cant.$error" @blur="$v.add.cant.$touch()" />
        <q-input class="col-5" v-model.number="add.prec" placeholder="Precio" dense outlined rounded error-message="Requerido" :error="$v.add.prec.$error" @blur="$v.add.prec.$touch()" />
        <q-input class="col-5" v-model.number="add.tot" placeholder="Total" dense outlined rounded error-message="Requerido" :error="$v.add.tot.$error" @blur="$v.add.tot.$touch()" />
      </div>
      <div class="row justify-end q-mt-xs">
        <q-btn label="agregar" dense style="padding:1px; border-radius:12px;width:150px" color="primary" push glossy @click="addCarrito(add)"/>
      </div>
      <q-separator inset class="q-mt-md" />
      <div class="column q-mt-sm">
          <div class="column">
            <div class="row items-center">
              <div class="text-subtitle2 text-grey-9 q-ml-sm"> * Servicios *</div>
            </div>
            <div class="row justify-center">
              <div class="col-3 title-table q-pa-xs">Servicio</div>
              <div class="col-3 title-table q-pa-xs">Cantidad</div>
              <div class="col-3 title-table q-pa-xs">Precio</div>
              <div class="col-3 title-table q-pa-xs">Total</div>
            </div>
            <div class="row justify-center q-mt-sm" v-for="(item, index) in carrito" :key="index">
              <div class="col-3 title-table-product q-pa-xs">{{item.serv}}</div>
              <div class="col-3 title-table-product q-pa-xs">{{item.cant}}</div>
              <div class="col-3 title-table-product q-pa-xs">{{item.prec}}</div>
              <div class="col-3 title-table-product q-pa-xs">{{item.tot}}</div>
            </div>
          </div>
      </div>
      <q-separator inset class="q-mt-md" />
      <div class="row justify-around q-mt-md">
        <div class="text-h6 text-primary">Total</div>
        <div class="column text-primary">
          <div class="text-h6">$ {{totalCarrito}}</div>
          <div style="font-size:10px">iva incluido</div>
        </div>
      </div>
      <div class="row justify-center q-mt-md">
        <q-btn label="enviar" color="primary" push glossy style="width:150px;height:45px" @click="enviarCotizacion()" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      tags: [],
      add: {},
      carrito: []
    }
  },
  validations () {
    return {
      add: {
        serv: { required },
        cant: { required },
        prec: { required },
        tot: { required }
      }
    }
  },
  computed: {
    totalCarrito () {
      let total = 0
      if (this.carrito.length > 0) {
        for (const i of this.carrito) {
          total = total + i.tot
        }
      }
      return total
    }
  },
  mounted () {
  },
  methods: {
    addCarrito (miObjeto) {
      this.$v.$touch()
      if (!this.$v.$error) {
        this.carrito.push(this.add)
        this.add = {}
        this.$v.$reset()
        console.log(this.carrito, 'carrito')
      }
    },
    enviarCotizacion () {
      if (this.carrito.length > 0) {
        console.log('car', this.carrito)
      } else {
        this.$q.notify({
          message: 'Ingrese Productos antes de enviar una cotizacion',
          color: 'warning'
        })
      }
    }
  }
}
</script>

<style>
.round-tag {
  border-radius: 12px;
}
.title-table {
  border-radius: 12px;
  background-color: #b3e3f4;
  color: #529cb3;
  border: 1px solid grey;
}

.title-table-product {
  border-radius: 12px;
  background-color: #cccccc;
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
}
</style>
