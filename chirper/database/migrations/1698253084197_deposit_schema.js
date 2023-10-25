'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepositSchema extends Schema {
  up () {
    this.create('deposits', (table) => {
      table.increments('id') //auto increment PRIMARY KEY 
      table.string('name', 255); //equivalent to VARCHAR(255) in MySQL
      table.decimal('amount', [10, 2]).unsigned().notNullable().defaultTo(0)
      table.decimal('fee', [10, 2]).unsigned().notNullable().defaultTo(0)
      table.datetime('created_datetime') //equivalent to DATETIME in MySQL
      table.datetime('updated_datetime') //equivalent to DATETIME in MySQL
      })
  }

  down () {
    this.drop('deposits')
  }
}

module.exports = DepositSchema
