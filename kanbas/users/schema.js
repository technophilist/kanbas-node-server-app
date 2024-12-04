import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    dob: Date,
    role: {
        type: String,
        enum: ['FACULTY', 'STUDENT', 'ADMIN', 'USER'],
        default: 'STUDENT'
    },
    loginId: { type: String, unique: true },
    section: String,
    lastActivity: Date,
    totalActivity: String
}, { collection: 'users' })

export default userSchema 