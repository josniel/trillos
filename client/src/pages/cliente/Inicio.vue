<template>
  <div>
  <q-img :src="baseu + 'perfil' + form2._id" spinner-color="white" style="height: 300px; width: 100%;border-bottom-right-radius:25px;border-bottom-left-radius:25px">
    </q-img>
    <div class="q-px-sm text-bold q-ml-sm">¿NECESITAS AYUDA?</div>
    <div class="q-px-sm text-caption q-ml-sm">Selecciona una de nuestras categorias y contáctate con el taller que desees</div>
       <botones-header/>
    <div class="q-px-sm text-bold q-ml-sm">Talleres mejor calificados</div>
      <q-scroll-area
      horizontal
      style="height: 200px; width: 100%;"
      class="bg-grey-1 rounded-borders"
    >
    <div class="row no-wrap q-gutter-xl">
      <q-card v-for="(img, index) in data2"  bordered style="width: 90%;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="index" @click="$router.push('/tienda/' + img._id)">
        <q-card-section horizontal>
            <q-card-section>
              <div class="q-pt-md column items-center justify-center">
                <q-img
                  style="height: 90px;width: 120px"
                  class="rounded-borders"
                  :src="baseu2 + img._id" spinner-color="white"
                />
                <q-rating class="q-mt-xs" v-model="img.rating_tienda" size="1.5em" color="yellow" readonly/>
                </div>
              </q-card-section>

            <q-card-section class="q-pt-xs">
            <div class="text-overline">{{img.full_name}}</div>
              <div class="column justify-center">
                <div class="text-caption text-grey">
                  {{img.descripcion}}
                </div>
                <div class="text-caption">{{img.direccion}}</div>
                <div class="text-caption">{{'Dias y horarios de atención'}}</div>
                <div class="row">
                  <div class="row" v-for="(dia, index) in img.dias" :key="index"> {{diasF[dia]}}
                    <div v-if="img.dias.length - 1 != index" class="q-ml-xs q-mr-xs">-</div>
                  </div>
                </div>
                <div class="text-caption">{{img.hora_inicio}} a {{img.hora_fin}} hrs.</div>
              </div>
            </q-card-section>

          </q-card-section>
      </q-card>
    </div>
    </q-scroll-area>

    <q-scroll-area
      horizontal
      style="height: 230px; width: 100%;"
      class="rounded-borders"
    >
    <div class="row no-wrap q-gutter-md">
      <q-card v-for="(img, n) in 5"   bordered style="width: 100%;height: 200px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="n">
        <q-img
          style="height: 200px;width: 400px"
          class="rounded-borders"
          :src="'nopublicidad.jpg'" spinner-color="white"
        />
      </q-card>
    </div>
    </q-scroll-area>
    <div class="q-px-sm text-bold q-ml-sm">Talleres mejor calificados</div>
      <div class="row items-center justify-center q-gutter-md">
        <q-card v-for="(img, n) in 6"   bordered style="width: 150px;height:250px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="n" class="my-card">
          <q-img
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            style="height: 250px;width: 150px">
            <div class="absolute-full">
          <q-btn position="top-left" round icon="favorite" color="primary" size="10px" class=""/>
            <div class="absolute-bottom q-mb-sm text-subtitle2 text-center">
            <div class="q-px-sm q-ml-sm">Nombre taller</div>
            <div class="q-px-sm q-ml-sm">Direccion</div>
              <q-btn color="primary" label="Ir Taller" />
            </div>
            </div>
          </q-img>
        </q-card>
      </div>
      <div class="column items-center justify-center q-mt-md">
      <q-btn rounded color="primary" label="Ver mas" style="width:180px" />
      </div>
      <div class="q-mt-xl">
        <q-scroll-area
        horizontal
        style="height: 230px; width: 100%;"
        class="rounded-borders"
      >
      <div class="row no-wrap q-gutter-md">
        <q-card v-for="(img, n) in 5"   bordered style="width: 100%;height: 200px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="n">
          <q-img
            style="height: 200px;width: 400px"
            class="rounded-borders"
            :src="'nopublicidad.jpg'" spinner-color="white"
          />
        </q-card>
      </div>
      </q-scroll-area>
    </div>

     <div class="q-px-sm text-bold q-ml-sm">Algunos Productos</div>

     <div v-if="data.length" class="row items-center justify-center q-gutter-md">
        <q-card v-for="(img, index) in data"   bordered style="width: 150px;height:250px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="index" class="my-card">
          <q-img
            :src="img.fileName ? baseu3 + '/' + img.fileName : img.images ? baseu3 + '/' + img.images[0] : 'noimgpro.png'"
            style="height: 250px;width: 150px">
            <div class="absolute-full">
            <div class="absolute-bottom q-mb-sm text-subtitle2 text-center">
            <div class="q-px-sm q-ml-sm">{{img.name}}</div>
            <div class="q-px-sm q-ml-sm">{{img.datos_proveedor.full_name}}</div>
              <q-btn color="primary" label="Ir Taller" @click="$router.push('/descripcionproducto/' + img._id)" />
            </div>
            </div>
          </q-img>
        </q-card>
      </div>
    <q-card v-else class="shadow-11 q-my-sm q-mx-md q-pa-sm">
      <div class="text-center text-subtitle1">Sin productos disponibles...</div>
    </q-card>
    <div v-if="data.length" class="column items-center justify-center q-mt-md">
      <q-btn rounded color="primary" label="Ver mas" style="width:180px" />
      </div>
  </div>
</template>

<script>
import env from '../../env'
import BotonesHeader from '../../components/BotonesHeader.vue'
/* import ListadoDeFavoritos from '../../components/ListadoDeFavoritos.vue' */
/* import ListadoDeSugerencia from '../../components/ListadoDeSugerencia.vue' */
/* import ListadoMasPopulares from '../../components/ListadoMasPopulares.vue' */
export default {
  components: {
    BotonesHeader
  /*  ListadoDeSugerencia */
  /* ListadoMasPopulares */
  /* ListadoDeFavoritos */
  },
  data () {
    return {
      data: [],
      baseu: '',
      baseu2: '',
      baseu3: '',
      ratingTienda: 0,
      form2: {},
      data2: [],
      user: {
      },
      dataFav: [],
      diasF: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
    }
  },
  mounted () {
    this.baseu = env.apiUrl + '/perfil_img/'
    this.baseu3 = env.apiUrl + '/productos_img'
    this.cargarProductos()
    this.estaLogueado()
    this.tiendasFavoritas()
    this.tiendasPopulares()
    this.getUser()
  },
  methods: {
    cargarProductos () {
      this.$api.get('producto').then(res => {
        this.data = res
        console.log(this.data, 'dataaaaaaaaaaaaaaaaaaaaaaaaa')
      })
    },
    estaLogueado () {
      const logueo = JSON.parse(localStorage.getItem('TRI_SESSION_INFO'))
      console.log(logueo, 'usuario')
      if (logueo) {
        this.user = JSON.parse(localStorage.getItem('TRI_SESSION_INFO'))
      }
    },
    tiendasFavoritas () {
      this.$api.get('mis_favoritos').then(res => {
        if (res) {
          this.dataFav = res
        }
      })
    },
    getUser () {
      this.$api.get('user_info').then(v => {
        if (v) {
          this.rol = v.roles[0]
        }
        if (this.rol === 3) {
          this.datosproveedor = true
          this.form2 = v
          this.id = this.form2._id
        }
        if (this.rol === 2) {
          this.form2 = v
        }
      })
    },
    tiendasPopulares () {
      this.$api.get('mas_populares').then(res => {
        if (res) {
          this.data2 = res
          this.baseu2 = env.apiUrl + '/perfil_img/perfil'
          console.log(this.data2, 'data2222')
        }
      })
    }
  }
}
</script>

<style>
.estilo-titulos {
  background-color: #fff599;
  width: 250px;
  border-radius: 12px
}

</style>>
