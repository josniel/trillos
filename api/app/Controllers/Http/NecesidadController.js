'use strict'
const Necesidad = use("App/Models/Necesidad")
const { validate } = use("Validator")
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with necesidads
 */
class NecesidadController {
  /**
   * Show a list of all necesidads.
   * GET necesidads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, auth }) {
    let datos = (await Necesidad.query().where({}).with('creador').fetch()).toJSON()
    response.send(datos)
  }

  /**
   * Render a form to be used for creating a new necesidad.
   * GET necesidads/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new necesidad.
   * POST necesidads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    let recibir = request.all()
    const validation = await validate(recibir, Necesidad.fieldValidationRules())
    if (validation.fails()) {
      response.unprocessableEntity(validation.messages())
    } else {
      let body = request.only(Necesidad.fillable)
      body.ownerId = ((await auth.getUser()).toJSON())._id
      let guardar = await Necesidad.create(body)
      response.send(guardar)
    }
  }

  /**
   * Display a single necesidad.
   * GET necesidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing necesidad.
   * GET necesidads/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update necesidad details.
   * PUT or PATCH necesidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a necesidad with id.
   * DELETE necesidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = NecesidadController
