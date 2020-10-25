'use strict'

const Issue = use('App/Models/Issue')

class IssueController {
  index() {
    return Issue.all()
  }

  show({ params }) {
    return Issue.find(params.id)
  }

  async store({ request }) {
    const { title, label } = request.all()

    const issue = new Issue()
    issue.title = title
    issue.label = label
    await issue.save()

    return issue
  }
}

module.exports = IssueController
