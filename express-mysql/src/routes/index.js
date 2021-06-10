const express = require('express');
const router = express.Router();

router.get('/api', async (req, res) => {
  res.json({ message: "Hello amigo sacos!" });
});

module.exports = router;