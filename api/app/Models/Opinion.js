'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Opinion extends Model {
  static get fillable() {
    return ['comentario', 'rating_tienda', 'necesidad_id']
  }
  static fieldValidationRules() {
    const rules = {
      comentario: "string",
      rating_tienda: "number",
      necesidad_id: "string"
        }
    return rules
  }
  user_info () {
    return this.hasOne('App/Models/User', 'user_id', '_id')
  }
}

module.exports = Opinion
