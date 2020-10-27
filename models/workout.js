const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    
    day: {
        type: Date,
        default: Date.now(),
    },
    exercises: [
        {
        type: {
            type: String,
        },
        name: {
            type: String,
            trim: true,
            require: "Enter name of exercise"
        },
        duration: {
            type: Number,
            required: "Enter the duration in minutes"
        },
        weight: {
            type: Number,
            required: "Weight required"
        },
        reps: {
            type: Number,
            required: "Reps are required"
        },
        sets: {
            type: Number,
            required: "Sets are required"
        },
        distance: {
            type: Number,
            require: "Distance is requried"
        }
        }
    ]
    },
    {
    toJSON: {
        virtuals: true
    }
    }
);

// To include virtuals in res.json(), you need to set the toJSON schema option to { virtuals: true }.

// https://mongoosejs.com/docs/2.7.x/docs/virtuals.html
// will need to investigate for retruning to workout

workoutsSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
