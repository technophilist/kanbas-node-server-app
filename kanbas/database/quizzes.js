const quizzes = [
    {
        courseId: "RS101",
        id: "1",
        title: "Midterm Examination - Web Development",
        quizType: "Graded Quiz",
        points: 100,
        assignmentGroup: "Exams",
        dueDateTimestampMillis: "1718467200000",      // April 15, 2024, 23:59:00
        availableFromTimestampMillis: "1718409600000", // April 15, 2024, 09:00:00
        availableUntilTimestampMillis: "1718469600000", // April 16, 2024, 00:00:00
        timeLimitInMinutes: 90,
        shuffleAnswers: true,
        shouldShuffleAnswers: true,
        allowMultipleAttempts: false,
        isMultipleAttempts: false,
        oneQuestionAtATime: true,
        isOneQuestionAtATime: true,
        webcamRequired: false,
        isWebcamRequired: false,
        lockQuestionsAfterAnswering: true,
        shouldLockQuestionsAfterAnswering: true,
        showCorrectAnswersImmediately: false,
        description: "This midterm exam covers chapters 1-5 of the course material. Please ensure you have a stable internet connection before starting.",
        assignTo: "Everyone",
        viewResponses: "After quiz submission",
        accessCode: "WD2024MT",
        isPublished: true,
        questions: [
            {
                id: "q1",
                type: "multiple-choice",
                title: "Basic JavaScript Question",
                points: 5,
                question: "Which of the following is NOT a JavaScript data type?",
                choices: [
                    {
                        id: "c1",
                        text: "String",
                        isCorrect: false
                    },
                    {
                        id: "c2",
                        text: "Integer",
                        isCorrect: true
                    },
                    {
                        id: "c3",
                        text: "Boolean",
                        isCorrect: false
                    },
                    {
                        id: "c4",
                        text: "Undefined",
                        isCorrect: false
                    }
                ]
            },
            {
                id: "q2",
                type: "multiple-choice",
                title: "React Hooks Question",
                points: 4,
                question: "Which hook would you use to perform side effects in a React component?",
                choices: [
                    {
                        id: "c1",
                        text: "useState",
                        isCorrect: false
                    },
                    {
                        id: "c2",
                        text: "useEffect",
                        isCorrect: true
                    },
                    {
                        id: "c3",
                        text: "useContext",
                        isCorrect: false
                    },
                    {
                        id: "c4",
                        text: "useReducer",
                        isCorrect: false
                    }
                ]
            },
            {
                id: "q3",
                type: "true-false",
                title: "React Components Question",
                points: 3,
                question: "In React, all functional components must start with a capital letter.",
                correctAnswer: true
            },
            {
                id: "q4",
                type: "true-false",
                title: "JavaScript Scope",
                points: 3,
                question: "Variables declared with 'let' are hoisted to the top of their scope.",
                correctAnswer: false
            },
            {
                id: "q5",
                type: "fill-in-the-blank",
                title: "HTML Basics",
                points: 4,
                question: "The HTML tag used to create a hyperlink is _____.",
                possibleAnswers: ["<a>", "a", "<a", "a>"]
            },
            {
                id: "q6",
                type: "fill-in-the-blank",
                title: "CSS Selector",
                points: 3,
                question: "To select an element by its ID in CSS, you use the _____ symbol.",
                possibleAnswers: ["#", "hashtag", "pound", "number sign"]
            }
        ]
    }
]
export default quizzes