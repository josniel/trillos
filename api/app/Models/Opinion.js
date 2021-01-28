'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Opinion extends Model {
  static get fillable() {
    return ['comentario', 'rating_tienda', 'necesidad_id', 'rating_cliente']
  }
  static fieldValidationRules() {
    const rules = {
      comentario: "string",
      rating_tienda: "number",
      necesidad_id: "string",
      rating_cliente: "string"
        }
    return rules
  }
  user_info () {
    return this.hasOne('App/Models/User', 'user_id', '_id')
  }
  creador () {
    return this.hasOne('App/Models/User', 'ownerId', '_id')
  }
}

module.exports = Opinion
