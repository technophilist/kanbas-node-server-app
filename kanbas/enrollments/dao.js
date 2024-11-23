import database from "../database/index.js";

function enrollUserInCourse(userId, courseId) {
    const {enrollments} = database;
    enrollments.push({_id: Date.now().toString(), user: userId, course: courseId});
}

function unEnrollUserFromCourse(userId, courseId) {
    database.enrollments = database.enrollments.filter((enrollment) => !(enrollment.user === userId && enrollment.course === courseId))
}

export {enrollUserInCourse, unEnrollUserFromCourse}