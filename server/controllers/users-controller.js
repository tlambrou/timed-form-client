const db = require('../models');

module.exports = (app) => {

// User find or create
app.post('/users', function(req, res, next) {
    console.log('POST Answer');
    console.log("Req.body:", req.body)
    const name = req.body.name;
    db.User.create({
      name
    }).then(user => {
      console.log("Created user: ", user)
      // Respond with confirmation
      res.status(200);
      res.json({
        message: 'User added successfully!',
        user: user.get({plain: true})
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
