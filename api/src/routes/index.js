const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activityRoute = require('./activityRoute');
const countriesRoute = require('./countriesRoute');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countriesRoute);
router.use('/activity', activityRoute);

module.exports = router;
