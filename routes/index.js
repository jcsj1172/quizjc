var express = require('express');
var router = express.Router();
//añadimos el acceso a quiz_controlers
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});
//metodo get para cuestiones y respuestas de quizController
router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);

module.exports = router;
