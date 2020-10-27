const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day:{
        type: Date,
        default: Date.now
    },
    excercises:[
    {
        type: {
            type:String,
            trim: true,
            required: "Please include excercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Please include name of exercise"
        },

        duration: {
            type: Number,
            trim: true,
            required: "Please include amount of minutes"
        },
        weight: Number,
        reps: Number,
        sets: Number
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
