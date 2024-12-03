import database from "../database/index.js"

const getQuizSummariesForCourse = (courseId) => {
    return database.quizzes.filter(quiz => quiz.courseId === courseId)
}

const getQuizById = (quizId) => {
    return database.quizzes.find(q => q.id === quizId)
}

const setPublishStatusForQuiz = (quizId, isPublished) => {
    const quiz = database.quizzes.find(q => q.id === quizId)
    quiz.isPublished = isPublished
}

const deleteQuiz = (quizId) => {
    database.quizzes = database.quizzes.filter(q => q.id !== quizId)
}

const updateQuiz = (updatedQuiz) => {
    database.quizzes = database.quizzes.map(q => q.id === updatedQuiz.id ? updatedQuiz : q)
}

export default { getQuizSummariesForCourse, getQuizById, setPublishStatusForQuiz, deleteQuiz, updateQuiz }