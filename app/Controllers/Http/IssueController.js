'use strict'

const Issue = use('App/Models/Issue')

class IssueController {
  // GET /api/issues
  index() {
    return Issue.all()
  }

  // GET /api/issues/:id
  show({ params }) {
    return Issue.find(params.id)
  }

  // POST /api/issues
  async store({ request }) {
    const { title, label } = request.all()

    const issue = new Issue()
    issue.title = title
    issue.label = label
    await issue.save()

    return issue
  }

  // PUT /api/issues/:id
  async update({ params, request }) {
    const { title, label } = request.all()

    const issue = await Issue.find(params.id)
    issue.title = title
    issue.label = label
    await issue.save()

    return issue
  }

  // DELETE /api/issues/:id
  async destroy({ params }) {
    const issue = await Issue.find(params.id)
    await issue.delete()

    // return Issue.find(params.id).then((issue) => {
    //   return issue.delete()
    // })
  }
}

module.exports = IssueController
