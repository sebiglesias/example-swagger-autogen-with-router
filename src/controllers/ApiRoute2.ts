import express from "express";
import {auth} from "../middlewares/auth";

export const createApiRouter2 = () => {
    const router = express.Router()
    router.route('/test-get').get(auth, (req, res, next) => {
        // #swagger.description = "Description here..."
        res.status(200).json({
            data: [],
            message: 'Successfully found'
        })
    })

    router.route('/test-delete/:id').delete(auth, async (req, res, next) => {
        res.status(200).json({
            msg: [],
            message: 'Delete!'
        })
    })

    return router
}