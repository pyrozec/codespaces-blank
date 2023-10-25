'use strict'

/*
|--------------------------------------------------------------------------
| DepositSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')
const Moment = use('moment')

class DepositSeeder {
  async run () {
    await Database.truncate('deposits')
    await Database.from('deposits').insert({
      name: 'Weekly Allowance Deposit',
      amount: '1840',
      fee: '105',
      created_datetime: Moment().format('YYYY-MM-DD HH:mm:ss')
    })
    await Database.from('deposits').insert({
      name: 'Twice In a Week Allowance Deposit',
      amount: '1250',
      fee: '55',
      created_datetime: Moment().format('YYYY-MM-DD HH:mm:ss')
    })
  }
}

module.exports = DepositSeeder
