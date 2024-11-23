import database from "../database/index.js"

const findAllCourses = () => database.courses

const findCoursesForEnrolledUser = userId => {
    const {courses, enrollments} = database
    const enrolledCourses = courses.filter((course) => enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id))
    return enrolledCourses
}

function createCourse(course) {
    const newCourse = {...course, _id: Date.now().toString()}
    database.courses = [...database.courses, newCourse]
    return newCourse
}

function deleteCourse(courseId) {
    const {courses, enrollments} = database
    database.courses = courses.filter((course) => course._id !== courseId)
    database.enrollments = enrollments.filter((enrollment) => enrollment.course !== courseId)
}

function updateCourse(courseId, courseUpdates) {
    const {courses} = database
    const course = courses.find((course) => course._id === courseId)
    Object.assign(course, courseUpdates)
    return course
}

export {findAllCourses, findCoursesForEnrolledUser, createCourse, deleteCourse, updateCourse}