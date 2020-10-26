// "/api/workouts "- get (workout)/ update/ post
var db = require("../models")
module.exports = function(app) {
    app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //app.put("/api/workouts", (req, res) => {})

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body} }, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });


}