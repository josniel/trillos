'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Producto extends Model {
  static get fillable() {
    return ['name','categoria_id','description','cantidad']
  }
  static fieldValidationRules() {
    const rules = {
      name: "required|string",
      categoria_id: "string",
      description: "required|string",
      cantidad: "required|number"
    }
    return rules
  }
}

module.exports = Producto
