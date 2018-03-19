'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = undefined;

var getAll = exports.getAll = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var all;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _logger2.default.info('infos');
            _context.prev = 1;
            _context.next = 4;
            return _room2.default.findOne({ name: 'Salle #1' });

          case 4:
            all = _context.sent;

            response.sendResponse(res, all);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            _logger2.default.info(_context.t0);
            next(_context.t0);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));

  return function getAll(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _responses = require('../libs/responses');

var response = _interopRequireWildcard(_responses);

var _room = require('../schemas/room');

var _room2 = _interopRequireDefault(_room);

var _logger = require('../libs/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = getAll;