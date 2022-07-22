import express from "express";

import {auth} from "../middlewares/auth";

type User = {
    id: number,
    name: string
}

export const createApiRouter1 = () => {
    const router = express.Router()
    router.post('/signin', (req, res, next) => {
        /* 	#swagger.tags = ['User']
            #swagger.description = 'Endpoint to sign in a specific user' */

        /*	#swagger.parameters['obj'] = {
                in: 'body',
                description: 'User information.',
                required: true,
                schema: { $ref: "#/definitions/AddUser" }
        } */

        /* #swagger.security = [{
                "apiKeyAuth": []
        }] */
        res.status(201).json({
            data: [],
            message: 'Authentication successed'
        })
    })

    router.route('/users/:id').get(auth, (req: { params: { id: string } }, res: { status: (arg: number) => { json: { (arg: { data: User; message: string; }): void; new(): any; } } }) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint to get a specific user.'
        const users = []
        // @ts-ignore
        const data = users.find(e => e.id === req.params.id)

        res.status(200).json({
            data,
            message: 'Successfully found'
        })
    })
    return router
}
