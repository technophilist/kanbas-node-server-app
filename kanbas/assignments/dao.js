import assignments from "../database/assignments.js"

const getAllAssignmentsForCourse = (cid) => assignments.filter((assignment) => assignment.course === cid)

const createNewAssignment = (newAssignment, parentAssignmentId, cid) => {
    for (const assignment of assignments) {
        if (assignment._id !== parentAssignmentId || assignment.course !== cid) continue
        assignment.assignmentItems.push(newAssignment)
        break
    }
}

const updateAssignment = (updatedAssignment, parentAssignmentId, cid) => {
    for (const assignment of assignments) {
        if (assignment._id !== parentAssignmentId || assignment.course !== cid) continue
        for (const assignmentItem of assignment.assignmentItems) {
            if (assignmentItem.id === updatedAssignment.id) {
                assignmentItem.link = updatedAssignment.link
                assignmentItem.title = updatedAssignment.title
                assignmentItem.notAvailableUntil = updatedAssignment.notAvailableUntil
                assignmentItem.due = updatedAssignment.due
                assignmentItem.totalPoints = updatedAssignment.totalPoints
            }
        }
    }
}

const deleteAssignment = (assignmentId, parentAssignmentId, cid) => {
    for (const assignment of assignments) {
        if (assignment._id !== parentAssignmentId || assignment.course !== cid) continue
        assignment.assignmentItems = assignment.assignmentItems.filter(item => item.id !== assignmentId)
        break
    }

}

export {getAllAssignmentsForCourse, createNewAssignment, updateAssignment, deleteAssignment}