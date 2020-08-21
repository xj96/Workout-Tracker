const db = require("../models");
const Workout = db.Workout;

module.exports = function (app) {
  // create workout
  app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // add workout
  app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // retrieve workouts
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // workout stats
  app.get("/api/workouts/range", (req, res) => {
    const start = new Date().setDate(new Date().getDate() - 7);
    Workout.find({ day: { $gte: start, $lte: Date.now() } })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
