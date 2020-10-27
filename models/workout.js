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
            trim: true,
            required: "Enter exercise type"
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



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
