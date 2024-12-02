import database from "../database/index.js"

const getQuizSummariesForCourse = (courseId) => {
    return database.quizzes.filter(quiz => quiz.courseId === courseId)
}

export default {getQuizSummariesForCourse}