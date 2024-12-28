import express from "express"
import cors from "cors"
import UserRoutes from "./kanbas/users/routes.js";
import session from "express-session"
import "dotenv/config"
import CourseRoutes from "./kanbas/courses/routes.js";
import ModuleRoutes from "./kanbas/modules/routes.js";
import AssignmentRoutes from "./kanbas/assignments/routes.js";
import EnrollmentsRoutes from "./kanbas/enrollments/routes.js";
import QuizzesRoutes from "./kanbas/quizzes/routes.js";
const app = express()
app.set('trust proxy', true)
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000"
}))

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas", resave: false, // don't write to session store if cookie is unchanged
    saveUninitialized: false // new empty session object is created for each user, but not saved if not modified
}

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN
    }
}

app.use(session(sessionOptions))
app.use(express.json())

// Kanbas
UserRoutes(app)
CourseRoutes(app)
ModuleRoutes(app)
AssignmentRoutes(app)
EnrollmentsRoutes(app)
QuizzesRoutes(app)
app.listen(process.env.PORT || 4000)
