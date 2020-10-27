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

  app.put("/api/workouts/:id", ({ params, body }, res) => {
    db.Workout.update({_id: params.id,}, { $push: { exercises: body} })
     console.log(body, params)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

}