import * as coursesDao from "./dao.js"

function AssignmentRoutes(app) {
    app.get("/api/assignments/:cid", (req, res) => {
        const {cid} = req.params
        const assignments = coursesDao.getAllAssignmentsForCourse(cid)
        res.json(assignments)
    })

    app.post("/api/assignments/new", (req, res) => {
        const {newAssignment, parentAssignmentId, courseId} = req.body
        coursesDao.createNewAssignment(newAssignment, parentAssignmentId, courseId)
        res.sendStatus(201)
    })

    app.put("/api/assignments/:parentAssignmentId", (req, res) => {
        const {parentAssignmentId} = req.params
        const {updatedAssignment, courseId} = req.body
        coursesDao.updateAssignment(updatedAssignment, parentAssignmentId, courseId)
        res.sendStatus(204)
    })

    app.delete("/api/assignments/:parentAssignmentId/:assignmentId/:courseId", (req, res) => {
        const {parentAssignmentId, assignmentId, courseId: cid} = req.params
        coursesDao.deleteAssignment(assignmentId, parentAssignmentId, cid)
        res.sendStatus(204)
    })
}

export default AssignmentRoutes