'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Categoria = use("App/Models/Categoria")
const categoriaData = [
  {
    id: 1,
    name: 'Taller Pintura o carrocería',
    icons: 'cats/Taller Pintura o carrocería.png'
  },
  {
    id: 2,
    name: 'Repuestos o Autopartes',
    icons: 'cats/Repuestos o Autopartes.png'
  },
  {
    id: 3,
    name: 'Gomería o Neumáticos',
    icons: 'cats/Gomería o Neumáticos.png'
  },
  {
    id: 4,
    name: 'Taller Mecánica',
    icons: 'cats/Taller Mecánica.png'
  },
  {
    id: 5,
    name: 'Taller Electricidad',
    icons: 'cats/Taller Electricidad.png'
  }

]
class CategoriaSeeder {
  async run () {
    for (let i in categoriaData) {
      let categoria = await Categoria.findBy('id', categoriaData[i].id)
      if (!categoria) {
        await Categoria.create(categoriaData[i])
      } else {
        categoria.name = categoriaData[i].name
        categoria.id = categoriaData[i].id
        categoria.icons = categoriaData[i].icons
        await categoria.save()
      }
    }
    console.log('Finished Categoria')
  }
}

module.exports = CategoriaSeeder
