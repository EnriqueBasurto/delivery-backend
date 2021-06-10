const express = require('express');
const router = express.Router();

const pool = require('../../database');

router.post('/add', async (req, res) => {
  const { direccion, metodo_pago } = req.body;
  const newTienda = {
    direccion,
    metodo_pago,
    negocio_id: "1"
  };
  await pool.query('INSERT INTO tiendas set ?', [newTienda]);
  console.log('Tienda added Successfully');
  res.redirect('/tiendas');
});

router.get('/', async (req, res) => {
  const tiendas = await pool.query('SELECT * FROM tiendas');
  console.log('Tienda added Successfully');
  res.json( {tiendas: tiendas });
  //res.render('view1', {tiendas: tiendas})
});

router.get('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM tiendas WHERE ID = ?', [id]);
  console.log('Tienda Removed Successfully');
  res.redirect('/tiendas');
});

router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const tiendas = await pool.query('SELECT * FROM tiendas WHERE id = ?', [id]);
  console.log(tiendas);
  res.redirect('/tiendas');
  //res.render('tiendas/edit', {tienda: tiendas[0]});
});

router.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { direccion, metodo_pago } = req.body;
  const newTienda = {
    direccion,
    metodo_pago,
    negocio_id: 1
  };
  await pool.query('UPDATE tiendas set ? WHERE id = ?', [newTienda, id]);
  console.log('Tienda updated Successfully');
  res.redirect('/tiendas');
});

module.exports = router;