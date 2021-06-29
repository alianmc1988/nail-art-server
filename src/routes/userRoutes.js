const express = require('express');
const router = express.Router();
const jwt = require ('jsonwebtoken')
const user = require('../controllers/userControllers');

router.get('/', user.getListUsers);
// router.get('/:id', services.getSelectedService);
router.post('/', user.login);
router.post('/sign-up', user.createUser);
router.post('/modify-user', user.createUser);
// router.put('/:id', services.updateServices);
// router.delete('/:id', services.deleteServices);




module.exports = router;