const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalControler')

//CREATE - POST & READ - GET
router.route('/').post(setGoal).get(getGoals)

//UPDATE - PUT & DELETE - DELETE
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router
