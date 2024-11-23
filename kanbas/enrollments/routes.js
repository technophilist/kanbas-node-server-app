import * as enrollmentDao from "./dao.js"

function EnrollmentsRoutes(app) {

    app.post("/api/enrollments", (req, res) => {
        const currentUser = req.session["currentUser"]
        enrollmentDao.enrollUserInCourse(currentUser._id, req.body.courseId)
        res.sendStatus(201)
    })

    app.delete("/api/enrollments/:courseId", (req, res) => {
        const currentUser = req.session["currentUser"]
        const {courseId} = req.params
        enrollmentDao.unEnrollUserFromCourse(currentUser._id, courseId)
        res.sendStatus(200)
    })
}

export default EnrollmentsRoutes