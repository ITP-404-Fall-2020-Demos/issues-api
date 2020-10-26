'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IssuesSchema extends Schema {
  up() {
    this.table('issues', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users')
    })
  }

  down() {
    this.table('issues', (table) => {
      table.dropColumn('user_id')
    })
  }
}

module.exports = IssuesSchema
