import quizzesDao from "./dao.js"
function QuizzesRoutes(app) {
    // get all quiz summaries for a course
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

    // get a quiz by id
    app.get("/api/quizzes/:quizId", (req, res) => {
        const { quizId } = req.params
        const quiz = quizzesDao.getQuizById(quizId)
        res.json(quiz)
    })

    // get all questions for a quiz
    app.get("/api/quizzes/:quizId/questions", (req, res) => {
        const { quizId } = req.params
        const questions = quizzesDao.getQuestionsForQuiz(quizId)
        res.json(questions)
    })

    app.post("/api/quizzes/attempts/new", (req, res) => {
        const { quizId, uid, answers, score } = req.body
        const quizAttempt = {
            attemptId: `${Date.now()}`,
            quizId,
            uid,
            score,
            answers
        }
        quizzesDao.createQuizAttempt(quizAttempt)
        res.json({ attemptId: quizAttempt.attemptId })
    })

    // update a quiz
    app.put("/api/quizzes/:quizId", (req, res) => {
        const updatedQuiz = req.body
        quizzesDao.updateQuiz(updatedQuiz)
        res.json(200)
    })

    // update a question
    app.put("/api/quizzes/:quizId/questions/:questionId", (req, res) => {
        const { quizId, questionId } = req.params
        const updatedQuestion = req.body
        quizzesDao.updateQuestion(quizId, questionId, updatedQuestion)
        res.json(200)
    })

    // update questions of a quiz
    app.put("/api/quizzes/:quizId/questions", (req, res) => {
        const { quizId } = req.params
        const updatedQuestionList = req.body
        quizzesDao.updateQuestionsOfQuiz(quizId, updatedQuestionList)
        res.json(200)
    })

    // set publish status for a quiz
    app.patch("/api/quizzes/:quizId", (req, res) => {
        const { quizId } = req.params
        const { isPublished } = req.body
        quizzesDao.setPublishStatusForQuiz(quizId, isPublished)
        res.json(200)
    })

    // delete a quiz
    app.delete("/api/quizzes/:quizId", (req, res) => {
        const { quizId } = req.params
        quizzesDao.deleteQuiz(quizId)
        res.json(200)
    })
}

export default QuizzesRoutes 