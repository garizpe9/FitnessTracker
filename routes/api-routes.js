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
  
  app.get("/api/workouts/:id", (req, res) => {
    db.Workout.findOne(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
    )
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
    db.Workout.update(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
      {$push: {
        exercises: req.body
        }
      },
     (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
     })
  });

}