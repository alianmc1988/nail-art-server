const express = require('express');
const router = express.Router();

const appointment = require('../controllers/appointmentsControllers');

router.get('/', appointment.getListAppointment);
router.get('/:id', appointment.getSelectedAppointment);
router.post('/', appointment.createAppointment);
router.put('/:id', appointment.updateAppointment);
router.delete('/:id', appointment.deleteAppointment);


module.exports = router;