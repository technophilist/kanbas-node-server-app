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

const getQuestionsForQuiz = (quizId) => {
    return database.quizzes.find(q => q.id === quizId).questions
}

const updateQuestion = (quizId, questionId, updatedQuestion) => {
    const quiz = database.quizzes.find(q => q.id === quizId)
    quiz.questions = quiz.questions.map(q => q.id === questionId ? updatedQuestion : q)
}

const updateQuestionsOfQuiz = (quizId, updatedQuestionList) => {
    const quiz = database.quizzes.find(q => q.id === quizId)
    quiz.questions = updatedQuestionList
}

const createQuizAttempt = (quizAttempt) => {
    database.quizAttempts.push(quizAttempt)
}

export default {
    getQuizSummariesForCourse,
    getQuizById,
    setPublishStatusForQuiz,
    deleteQuiz,
    updateQuiz,
    getQuestionsForQuiz,
    updateQuestion,
    updateQuestionsOfQuiz,
    createQuizAttempt
}