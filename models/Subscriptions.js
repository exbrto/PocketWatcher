import mongoose from 'mongoose'

// Schema is like a blueprint for one worklout session. enum: [] --> says these are the only values allowd for this feild.
// lowercase: true ==> turn the value into lowercase before saging it. 
const subsSchema =  new mongoose.Schema({
    logo: {type: String, default: ''},
    service: {type: String, required: true},    // option value must in the select must be the same as the string must lowercased
    price: {type: Number, required: true, min: 0},
    paymentCycle: {type: String, enum: ['monthly', 'yearly'], required: true},
    paymentDate: {type: Date, required: true},
    status: {type: Boolean, default: true},
})

// The model is what we use to Create, Read, Update, and Delete workout sessions
// Workouts is what becomes the collection 'workouts' in the mongodb database
const Subscriptions = mongoose.model('Subscriptions', subsSchema)

export default Subscriptions   // exports the model so that workoutsContoler.js can usse it