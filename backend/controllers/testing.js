const router = require('express').Router()
const Note = require('../models/note.model')
const User = require('../models/user.model')

router.post('/reset', async (request, response) => {
  await Note.deleteMany({})
  await User.deleteMany({})

  response.status(204).end()
})

module.exports = router
