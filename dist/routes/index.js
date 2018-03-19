'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _rooms = require('./rooms');

var rooms = _interopRequireWildcard(_rooms);

var _logger = require('../libs/logger');

var _logger2 = _interopRequireDefault(_logger);

var _responses = require('../libs/responses');

var responses = _interopRequireWildcard(_responses);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create router
var router = _express2.default.Router();

/*
** Rooms
*/

// Print requests to API
router.use(function (req, res, next) {
  _logger2.default.info('router', req.method, req.originalUrl);
  next();
});

// Routes
router.get('/rooms', rooms.getAll);

// Errors
router.use(function (error, req, res, next) {
  if (res.headersSent) return next(error);
  _logger2.default.error('Handled: ' + error.name, error);
  return responses.sendError(res, error);
});

exports.default = router;