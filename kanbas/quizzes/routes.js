import quizzesDao from "./dao.js"
function QuizzesRoutes(app) {

    app.get("/api/quizzes/summary/:courseId", async (req, res) => {
        const { courseId } = req.params
        const quizzes = quizzesDao
            .getQuizSummariesForCourse(courseId)
            .map(quiz => ({
                id: quiz.id,
                title: quiz.title,
                availableEpochTimestamp: quiz.availableFromTimestampMillis,
                dueEpochTimestamp: quiz.dueDateTimestampMillis,
                points: quiz.points,
                questionsCount: quiz.questions.length,
                isPublished: quiz.isPublished
            }))
        res.json(quizzes)
    })

    app.get("/api/quizzes/:quizId", (req, res) => {
        const { quizId } = req.params
        const quiz = quizzesDao.getQuizById(quizId)
        res.json(quiz)
    })

    app.get("/api/quizzes/:quizId/questions", (req, res) => {
        const { quizId } = req.params
        const questions = quizzesDao.getQuestionsForQuiz(quizId)
        res.json(questions)
    })

    app.put("/api/quizzes/:quizId", (req, res) => {
        const updatedQuiz = req.body
        quizzesDao.updateQuiz(updatedQuiz)
        res.json(200)
    })

    app.put("/api/quizzes/:quizId/questions/:questionId", (req, res) => {
        const { quizId, questionId } = req.params
        const updatedQuestion = req.body
        quizzesDao.updateQuestion(quizId, questionId, updatedQuestion)
        res.json(200)
    })

    app.patch("/api/quizzes/:quizId", (req, res) => {
        const { quizId } = req.params
        const { isPublished } = req.body
        quizzesDao.setPublishStatusForQuiz(quizId, isPublished)
        res.json(200)
    })

    app.delete("/api/quizzes/:quizId", (req, res) => {
        const { quizId } = req.params
        quizzesDao.deleteQuiz(quizId)
        res.json(200)
    })
}

export default QuizzesRoutes 