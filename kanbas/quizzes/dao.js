import database from "../database/index.js"

const getQuizSummariesForCourse = (courseId) => {
    return database.quizzes.filter(quiz => quiz.courseId === courseId)
}

const setPublishStatusForQuiz = (quizId, isPublished) => {
    console.log("Setting publish status for quiz", quizId, isPublished)
    const quiz = database.quizzes.find(q => q.id === quizId)
    quiz.isPublished = isPublished
}

const deleteQuiz = (quizId) => {
    database.quizzes = database.quizzes.filter(q => q.id !== quizId)
}

export default { getQuizSummariesForCourse, setPublishStatusForQuiz, deleteQuiz }