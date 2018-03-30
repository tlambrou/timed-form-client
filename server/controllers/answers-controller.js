const db = require('../models');

module.exports = (app) => {

// Answers Find or Create and return answer
app.post('/questions/:questionId/users/:userId/answers', function(req, res, next) {
    console.log('POST Answer');
    console.log("Req.body:", req.body)
    const questionId = req.params.questionId
    const userId = req.params.userId
    const text = req.body.text;
    db.Answer.create({
      text, userId, questionId
    }).then(() => db.Answer.findOrCreate({
      where: { userId, questionId }
    })).spread((answer, created) => {
      console.log("Created: ", created)
      // Respond with confirmation
      res.status(200);
      res.json({
        message: 'Answer added successfully!',
        answer: answer.get({plain: true})
      })
    })
    .catch((err) => {
      if (err) {
        console.log("Uhh oh!! ", err.message)
        res.json({
          message: "Uh oh! There was an error",
          error: err.message
        })
      }
    })
  });


}
