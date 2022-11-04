const express = require('express');
const { consultaCotizacionOficial, consultaCotizacionBlue} = require('../controllers/cotizacionController');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cotizacionOficial', consultaCotizacionOficial); 
router.get('/cotizacionBlue', consultaCotizacionBlue); 


module.exports = router;
