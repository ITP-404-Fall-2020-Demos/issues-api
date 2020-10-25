'use strict'

const Label = use('App/Models/Label')

class LabelController {
  index() {
    return Label.all()
  }
}

module.exports = LabelController
