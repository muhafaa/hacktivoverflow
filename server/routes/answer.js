const answerRouter = require('express').Router()

const ControllerAnswer = require('../controllers/answer')

const authenticate = require('../middlewares/authenticate')

answerRouter.use(authenticate)

answerRouter.post('/', ControllerAnswer.create)

answerRouter.get('/question/:id', ControllerAnswer.find)

answerRouter.get('/lists', ControllerAnswer.findOwn)

answerRouter.post('/upvote/:id', ControllerAnswer.upvote)

answerRouter.post('/downvote/:id', ControllerAnswer.downvote)

module.exports = answerRouter