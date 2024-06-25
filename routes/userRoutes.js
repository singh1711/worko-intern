const express = require('express');
const userController = require('../controllers/userController');
const userValidator = require('../validators/userValidator');

const router = express.Router();

router.get('/worko/user', userController.listUsers);
router.get('/worko/user/:userId', userController.getUser);
router.post('/worko/user', userValidator.validateUser, userController.createUser);
router.put('/worko/user/:userId', userValidator.validateUser, userController.updateUser);
router.patch('/worko/user/:userId', userValidator.validateUser, userController.partialUpdateUser);
router.delete('/worko/user/:userId', userController.deleteUser);

module.exports = router;
