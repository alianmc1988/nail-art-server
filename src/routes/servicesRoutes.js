const express = require('express');
const router = express.Router();

const services = require('../controllers/servicesControllers');

router.get('/', services.getListServices);
router.get('/:id', services.getSelectedService);
router.post('/', services.createServices);
router.put('/:id', services.updateServices);
router.delete('/:id', services.deleteServices);


module.exports = router;