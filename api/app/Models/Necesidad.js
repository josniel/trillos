'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Necesidad extends Model {
  static get fillable() {
    return ['categoria_id','ciudad','necesidad','descripcion']
  }
  static fieldValidationRules() {
    const rules = {
      categoria_id: "string",
      ciudad: "required|string",
      necesidad: "required|string",
      descripcion: "required|string"
    }
    return rules
  }
  creador () {
    return this.hasOne('App/Models/User', 'ownerId', '_id')
  }
}

module.exports = Necesidad
