'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ChatMessage extends Model {
    datos_cliente () {
      return this.hasOne('App/Models/User', 'cliente_id', '_id')
    }
    datos_proveedor () {
        return this.hasOne('App/Models/User', 'proveedor_id', '_id')
    }
    necesidad_info () {
      return this.hasOne('App/Models/Necesidad', 'necesidad_id', '_id')
  }
  categorianame () {
    return this.hasOne('App/Models/Categoria', 'categoria_id', '_id')
  }
}

module.exports = ChatMessage
