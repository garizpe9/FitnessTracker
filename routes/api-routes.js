// "/api/workouts "- get (workout)/ update/ post
var db = require("../models")
const mongojs = require("mongojs");

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

  app.post("/api/workouts/:id", (req, res) => {
    console.log(req)
    db.Workout.update(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
      {$set: {
        exercises: req.body.exercises
        }
      } 
      )
     console.log(req)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

}