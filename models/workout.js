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

WorkoutSchema.virtual('totalDuration').get(function() {

var total = 0;

for (var i  = 0; i < this.exercises.length; i++){

   total  += this.exercises[i].duration;
    
}
return total

  });



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
