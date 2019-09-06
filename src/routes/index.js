import express from 'express';
import controler from '../controler'

var router = express.Router();

router.get('/users', function (req, res, next) {
  controler.loadUser()
    .then(data => {
      res.send(data);
    })
});

router.post('/users', function (req, res, next) {
  controler.saveUser(req.body)
    .then(data => {
      res.send(data);
    })
});

export default router;
