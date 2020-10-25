'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LabelsSchema extends Schema {
  up() {
    this.create('labels', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('color').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('labels')
  }
}

module.exports = LabelsSchema
