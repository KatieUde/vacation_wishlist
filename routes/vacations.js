var express = require('express');
var router = express.Router();
var model = require('../models/Vacation');

function buildErrorResponse(err) {
  return {
    message: err,
    status: 500,
    note: 'This response was generated due to a user error'
  };
};

function addMessageToSuccessfulQuery(obj, msg) {
  var ret = obj;
  ret.message = msg;
  return ret;
};

/* GET vacations listing. */
router.get('/', function(req, res, next) {
  model.find(function(err, vacations) {
    if (err) {
      res.json(buildErrorResponse(err));
    }
    else {
      res.json(vacations);
    }
  });
});

// GET vacation by id
router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, vacation) {
    if (err) {
      res.json(buildErrorResponse(err));
    }
      else {
      res.json(vacation);
    }
  });
});

// CREATE vacation
router.post('/', function(req, res, next) {
  model.create(req.body, function(err, vacation) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(vacation);
    }
  });
});

// UPDATE vacation by id
router.put('/:id', function(req, res) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, vacation) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(vacation);
    }
  });
});
router.patch('/:id', function(req, res) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, vacation) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(vacation);
    }
  });
});

// DESTROY vacation by id
router.delete('/:id', function(req, res) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, vacation) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(vacation);
    }
  });
});

module.exports = router;
