'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionSchema extends Schema {
  up () {
    this.create('transactions', (table) => {
      table.increments('id')
      table.string('name', 80).notNullable()
      table.float('price').notNullable()
      table.integer('invoice_id').unsigned().references('id').inTable('invoices')
      table.timestamps()
    })
  }

  down () {
    this.drop('transactions')
  }
}

module.exports = TransactionSchema
