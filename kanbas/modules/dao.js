import database from "../database/index.js"

function findModulesForCourse(courseId) {
    const {modules} = database
    return modules.filter((module) => module.course === courseId)
}

function createModule(module) {
    const newModule = {...module, _id: Date.now().toString()}
    database.modules = [...database.modules, newModule]
    return newModule
}

function deleteModule(moduleId) {
    const {modules} = database
    database.modules = modules.filter((module) => module._id !== moduleId)
}

function updateModule(moduleId, moduleUpdates) {
    const {modules} = database
    const module = modules.find((module) => module._id === moduleId)
    Object.assign(module, moduleUpdates)
    return module
}

export {findModulesForCourse, createModule, deleteModule, updateModule}