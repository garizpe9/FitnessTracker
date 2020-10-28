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
  
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then(data => {
        res.json(data);
        console.log(data)
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    console.log(req)
    db.Workout.updateOne({_id: req.params.id,}, {exercises: req.body.exercises})
     console.log(req)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

}