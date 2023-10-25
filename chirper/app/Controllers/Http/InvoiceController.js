'use strict'




const Invoice = use('App/Models/Invoice')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with invoices
 */
class InvoiceController {
  /**
   * Show a list of all invoices.
   * GET invoices
   *
   * @param {object} ctx
   * @param {View} ctx.view
   */
  async index ({ view }) {
    const invoice = await Invoice.all()
    return view.render('index', {
      quotes: invoice.toJSON()
    })
  }

  /**
   * Render a form to be used for creating a new invoice.
   * GET invoices/create
   *
   * @param {object} ctx
   * @param {View} ctx.view
   */
  async create ({ view }) {
    return view.render('invoices.create-invoice')
  }

  /**
   * Create/save a new invoice.
   * POST invoices
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request,auth,session, response }) {

    const invoice = await Invoice.create({
      user_id: auth.user.id,
      username: auth.user.username,
      body: request.input('body')
    })
    session.flash({ 'successmessage': 'Invoice has been created'})
    return response.redirect('/')
  }

  /**
   * Display a single quote.
   * GET quotes/:id
   *
   * @param {object} ctx
   * @param {View} ctx.view
   */
  async show ({ params, view }) {
    const invoice = await Invoice.find(params.id)

    return view.render('invoices.view-invoice', {
      invoice: invoice.toJSON()
    })
  }

  /**
   * Render a form to update an existing quote.
   * GET quotes/:id/edit
   *
   * @param {object} ctx
   * @param {View} ctx.view
   */
  async edit ({ params, view }) {
    const invoice = await Invoice.find(params.id)
    return view.render('invoices.edit-invoice', {
      quote: invoice.toJSON()
    })
  }

  /**
   * Update quote details.
   * PUT or PATCH quotes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, session }) {
    const invoice = await Invoice.find(params.id)
    invoice.body = request.input('body')

    await invoice.save()

    session.flash({'successmessage': 'Invoice has been updated'})
    return response.redirect('/')
  }

  /**
   * Delete a invoice with id.
   * DELETE invoices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response, session }) {
    const invoice = await Invoice.find(params.id)
    await invoice.delete()
    session.flash({'successmessage': 'Invoice has been deleted'})
    return response.redirect('/')
  }
}

module.exports = InvoiceController
