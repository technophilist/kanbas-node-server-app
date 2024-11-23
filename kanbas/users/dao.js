import db from "../Database/index.js"

let {users} = db
const createUser = (user) => {
    const newUser = {...user, _id: Date.now()}
    users = [...users, newUser]
    return newUser
}
const findAllUsers = () => users
const findUserById = (userId) => users.find((user) => user._id === userId)
const findUserByUsername = (username) => users.find((user) => user.username === username)
const findUserByCredentials = (username, password) => users.find((user) => user.username === username && user.password === password)
const updateUser = (userId, user) => (users = users.map((u) => (u._id === userId ? user : u)))
const deleteUser = (userId) => (users = users.filter((u) => u._id !== userId))

export default {
    createUser,
    findAllUsers,
    findUserById,
    findUserByUsername,
    findUserByCredentials,
    updateUser,
    deleteUser
}