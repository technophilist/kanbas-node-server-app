import userModel from "./model.js"

const createUser = async (user) => {
    return await userModel.create(user)
}
const findAllUsers = async () => await userModel.find()
const findUserById = async (userId) => await userModel.findById(userId)
const findUserByUsername = async (username) => await userModel.findOne({ username })
const findUserByCredentials = async (username, password) => await userModel.findOne({ username, password })
const findUsersByRole = async (role) => await userModel.find({ role })
const updateUser = async (userId, user) => await userModel.updateOne({ _id: userId }, { $set: user })
const deleteUser = async (userId) => await userModel.deleteOne({ _id: userId })
const findUsersByPartialName = async (partialName) => {
    const regex = new RegExp(partialName, "i")
    return await userModel.find({
        $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }]
    })
}


export default {
    createUser,
    findAllUsers,
    findUserById,
    findUserByUsername,
    findUserByCredentials,
    findUsersByRole,
    updateUser,
    deleteUser,
    findUsersByPartialName
}