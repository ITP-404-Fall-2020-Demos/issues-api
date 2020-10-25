'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IssuesSchema extends Schema {
  up() {
    this.create('issues', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.integer('label').unsigned().references('id').inTable('labels')
      table.timestamps()
    })
  }

  down() {
    this.drop('issues')
  }
}

module.exports = IssuesSchema
