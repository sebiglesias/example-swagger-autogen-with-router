import express from 'express'
const ToolsController = require('./controllers/ToolsController')
import {createApiRouter1 } from "./controllers/ApiRoute1";

import {createApiRouter2} from "./controllers/ApiRoute2";

export const mainRouter = () => {
    const router = express.Router()
    router.use(createApiRouter1())
    router.use('/v2', createApiRouter2())

    router.get('/test-get', ToolsController.show)
    router.post('/test-post', store)
    router.delete('/test-delete/:id', ToolsController.delete)
    return router
}

function store(req, res) {
    const tools = {}
    return res.status(201).send({})
}