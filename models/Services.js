import mongoose from 'mongoose'

// Schema is like a blueprint for one worklout session. enum: [] --> says these are the only values allowd for this feild.
// lowercase: true ==> turn the value into lowercase before saging it. 
const servicesSchema =  new mongoose.Schema({
    service: {type: String, required: true},
    search: {type: [String], required: true, unique: true},
    logo: {type: String, required: true}
})

// The model is what we use to Create, Read, Update, and Delete workout sessions
// Workouts is what becomes the collection 'workouts' in the mongodb database
const Services = mongoose.model('Services', servicesSchema)

export default Services   // exports the model so that workoutsContoler.js can usse it