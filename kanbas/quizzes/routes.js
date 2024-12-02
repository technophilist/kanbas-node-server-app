import quizzesDao from "./dao.js"
function QuizzesRoutes(app) {

    app.get("/api/quizzes/summary/:courseId", async (req, res) => {
        const { courseId } = req.params
        const quizzes = quizzesDao
            .getQuizSummariesForCourse(courseId)
            .map(quiz => ({
                id: quiz._id,
                title: quiz.title,
                availableEpochTimestamp: quiz.availableFromTimestampMillis,
                dueEpochTimestamp: quiz.dueDateTimestampMillis,
                points: quiz.points,
                questionsCount: quiz.questions.length,
                isPublished: quiz.isPublished
            }))
        res.json(quizzes)
    })

}

export default QuizzesRoutes 