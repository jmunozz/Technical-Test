'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = require('../libs/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logRequests = function logRequests(req, res, next) {
  _logger2.default.info(req.method, req.originalUrl);
  next();
};

exports.default = logRequests;