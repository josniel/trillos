'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with opinions
 *
 */
const Opiniones = use("App/Models/Opinion")
const moment = require('moment')


class OpinionController {
  /**
   * Show a list of all opinions.
   * GET opinions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, params, auth }) {
    const user = (await auth.getUser()).toJSON()
    console.log(params.necesidad_id, 'paramssss')
    let opiniones = (await Opiniones.query().where({necesidad_id: params.necesidad_id, cliente: user.roles[0] === 2 ? false : true}).with('user_info').fetch()).toJSON()
    let formatearFecha = opiniones.map(v => {
      return {
        ...v,
        created_at: moment(v.created_at).locale('es').calendar()
      }
    })
    response.send(formatearFecha)
  }

  /**
   * Render a form to be used for creating a new opinion.
   * GET opinions/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new opinion.
   * POST opinions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, params, auth })  {
      const user = (await auth.getUser()).toJSON()
      let body = request.only(Opiniones.fillable)
      body.cliente = params.quien === 'cliente' ? true : false
      body.user_id = user._id
      const opinion = await Opiniones.create(body)
      response.send(opinion)
  }


  /**
   * Display a single opinion.
   * GET opinions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing opinion.
   * GET opinions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update opinion details.
   * PUT or PATCH opinions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a opinion with id.
   * DELETE opinions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = OpinionController
