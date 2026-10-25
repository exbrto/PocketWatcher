import express from 'express'

import {postSubby, updateSubby, deleteSubby} from '../controllers/subsController.js'  // this imports the function from workoutsController which handles workoout sessions beig saved to the databse.

const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        msg: 'Hello World'
    })
})

router.post('/', postSubby)

router.put('/:id', updateSubby)

router.delete('/:id', deleteSubby)

export default router   // exports router to app.js