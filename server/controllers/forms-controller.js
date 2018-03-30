const db = require('../models');

module.exports = (app) => {

  // Show a Form
  app.get('/forms/:id', (req, res) => {
    const formId = req.params.id
    db.Form.findOne({
      where: {
        id: formId
      },
      include: [{
        model: db.Question,
        order: [ [ { model: db.Question }, 'id', 'ASC' ] ]
      }],
      order: [ [ { model: db.Question }, 'id', 'ASC' ] ]
    })
    .then((form) => {
      console.log("Response from Form/Show: ", form)
      res.status(200)
      res.send({
        message: "Form request successful",
        form
      }
    )
  })
  .catch((err) => {
    console.log(err);
    res.status(400);
    res.json({
      message: "Error!",
      error: err
    })
  })
});


}
