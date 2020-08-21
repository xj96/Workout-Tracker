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
};
