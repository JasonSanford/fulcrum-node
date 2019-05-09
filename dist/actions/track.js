'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _formData = require('form-data');

var _formData2 = _interopRequireDefault(_formData);

var _mixmatch = require('mixmatch');

var _mixmatch2 = _interopRequireDefault(_mixmatch);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Track = function (_Mixin) {
  (0, _inherits3.default)(Track, _Mixin);

  function Track() {
    (0, _classCallCheck3.default)(this, Track);
    return (0, _possibleConstructorReturn3.default)(this, (Track.__proto__ || Object.getPrototypeOf(Track)).apply(this, arguments));
  }

  (0, _createClass3.default)(Track, [{
    key: 'uploadTrack',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(file) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var formData, accessKey, options, resp;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new _formData2.default();
                accessKey = id || _uuid2.default.v4();


                formData.append(this.resourceName + '[access_key]', accessKey);
                formData.append(this.resourceName + '[track]', file);

                options = {
                  body: formData,
                  headers: {
                    'Content-Type': null
                  }
                };
                _context.next = 7;
                return this.client.api.post(this.createAction, options);

              case 7:
                resp = _context.sent;
                return _context.abrupt('return', resp[this.resourceName]);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function uploadTrack(_x) {
        return _ref.apply(this, arguments);
      }

      return uploadTrack;
    }()
  }, {
    key: 'track',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
        var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
        var body;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.client.api.get(this.trackPath(id, format));

              case 2:
                body = _context2.sent;

                if (!(format === 'json')) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt('return', body.tracks);

              case 5:
                return _context2.abrupt('return', body);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function track(_x3) {
        return _ref2.apply(this, arguments);
      }

      return track;
    }()
  }, {
    key: 'trackPath',
    value: function trackPath(id, format) {
      return this.resourcesName + '/' + id + '/track.' + format;
    }
  }]);
  return Track;
}(_mixmatch2.default);

exports.default = Track;
module.exports = exports['default'];
//# sourceMappingURL=track.js.map