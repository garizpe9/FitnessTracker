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

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts", (req, res) => {})


  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { Workout: _id } }, { new: true }))
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });


}