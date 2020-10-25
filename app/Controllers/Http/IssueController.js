'use strict'

const Issue = use('App/Models/Issue')

class IssueController {
  index() {
    return Issue.all()
  }

  show({ params }) {
    return Issue.find(params.id)
  }
}

module.exports = IssueController
