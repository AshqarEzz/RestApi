const express = require('express')
const router = express.Routerouter()
const{getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}= require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).update(updateGoal)


module.exports = router
