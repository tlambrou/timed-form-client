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

  //SHOW USER
  app.get('/users/:userId', function(req, res) {
    console.log('SHOW user:', req.params.userId);
    const id = req.params.userId;

    db.User.findOne({ where: {id} }).then((userData) => {
      const user = userData.dataValues;
      if (!user) {
        // User not found
        return res.status(400).send({ message: 'Cannot get user' });
      }
      res.status(200);
      res.json({
        name: user.name
      });
    })
    .catch((err) => {
      if (err) {
        res.status(400);
        res.json({
          message: "Cannot get user"
        });
      }
    })

  });

}
