import mongoose from "mongoose";

const DATABASE = ''

mongoose.connect(DATABASE).then((error)=> {
    console.log('Connected to the database')
}).catch((error) => {
    console.log('Error connecting to the database', error.message)
})

const userSchema = new mongoose.Schema({
    username: {type: String},
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        returnedObject._id = undefined
        returnedObject.__v = undefined
    }
})

const User =  mongoose.model('User', userSchema)
export default User;
