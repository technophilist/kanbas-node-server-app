import dao from "./dao.js"
import * as courseDao from "../courses/dao.js"
import * as enrollmentsDao from "../enrollments/dao.js";

function UserRoutes(app) {

    const findCoursesForEnrolledUser = (req, res) => {
        let userId = req.params.userId

        if (userId === "current") {
            const currentUser = req.session["currentUser"]

            if (!currentUser) {
                res.sendStatus(401)
                return
            }

            userId = currentUser._id
        }

        const courses = courseDao.findCoursesForEnrolledUser(userId)
        res.json(courses)
    }

    const createUser = (req, res) => {
    }
    const deleteUser = (req, res) => {
    }
    const findAllUsers = (req, res) => {
    }
    const findUserById = (req, res) => {
    }
    const updateUser = (req, res) => {
        const userId = req.params.userId
        const userUpdates = req.body
        dao.updateUser(userId, userUpdates)
        const currentUser = dao.findUserById(userId)
        req.session["currentUser"] = currentUser
        res.json(currentUser)
    }
    const signup = (req, res) => {
        const {username, password} = req.body
        const user = dao.findUserByUsername(username)
        if (user) {
            res.status(400).json({message: "Username already in use"})
            return
        }
        const currentUser = dao.createUser({username, password})
        req.session["currentUser"] = currentUser
        res.json(currentUser)
    }
    const signin = (req, res) => {
        const {username, password} = req.body
        const currentUser = dao.findUserByCredentials(username, password)
        if (currentUser) {
            req.session["currentUser"] = currentUser
            res.json(currentUser)
        } else {
            res.status(401).json({message: "Unable to login. Try again later."})
        }
    }
    const signout = (req, res) => {
        req.session.destroy()
        res.status(200).send()
    }
    const profile = (req, res) => {
        const currentUser = req.session["currentUser"]
        if (!currentUser) {
            res.status(401).send()
            return
        }
        res.json(currentUser)
    }
    const createCourse = (req, res) => {
        const currentUser = req.session["currentUser"]
        const newCourse = courseDao.createCourse(req.body)
        enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id)
        res.json(newCourse)
    }
    //users
    app.post("/api/users", createUser)
    app.get("/api/users", findAllUsers)
    app.get("/api/users/:userId", findUserById)
    app.put("/api/users/:userId", updateUser)
    app.delete("/api/users/:userId", deleteUser)
    app.post("/api/users/signup", signup)
    app.post("/api/users/signin", signin)
    app.post("/api/users/signout", signout)
    app.post("/api/users/profile", profile)
    // courses
    app.get("/api/users/:userId/courses", findCoursesForEnrolledUser)
    app.post("/api/users/current/courses", createCourse)
}

export default UserRoutes