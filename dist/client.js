'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _frisbee = require('frisbee');

var _frisbee2 = _interopRequireDefault(_frisbee);

var _form = require('./resources/form');

var _form2 = _interopRequireDefault(_form);

var _record = require('./resources/record');

var _record2 = _interopRequireDefault(_record);

var _changeset = require('./resources/changeset');

var _changeset2 = _interopRequireDefault(_changeset);

var _choiceList = require('./resources/choice-list');

var _choiceList2 = _interopRequireDefault(_choiceList);

var _classificationSet = require('./resources/classification-set');

var _classificationSet2 = _interopRequireDefault(_classificationSet);

var _authorization = require('./resources/authorization');

var _authorization2 = _interopRequireDefault(_authorization);

var _membership = require('./resources/membership');

var _membership2 = _interopRequireDefault(_membership);

var _project = require('./resources/project');

var _project2 = _interopRequireDefault(_project);

var _layer = require('./resources/layer');

var _layer2 = _interopRequireDefault(_layer);

var _photo = require('./resources/photo');

var _photo2 = _interopRequireDefault(_photo);

var _video = require('./resources/video');

var _video2 = _interopRequireDefault(_video);

var _audio = require('./resources/audio');

var _audio2 = _interopRequireDefault(_audio);

var _role = require('./resources/role');

var _role2 = _interopRequireDefault(_role);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Client = function () {
  function Client(token, base) {
    (0, _classCallCheck3.default)(this, Client);

    this.base = base || 'https://api.fulcrumapp.com/api/v2';

    var options = {
      baseURI: this.base,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    var tokenOptions = Object.assign({}, options);
    tokenOptions.headers['X-ApiToken'] = token;
    var noTokenOptions = Object.assign({}, options);

    this.api = new _frisbee2.default(tokenOptions);
    this.noTokenApi = new _frisbee2.default(noTokenOptions);
  }

  (0, _createClass3.default)(Client, [{
    key: 'urlFromPath',
    value: function urlFromPath(path, base) {
      return (base || this.base) + '/' + path;
    }
  }, {
    key: 'url',
    value: function url(path, base) {
      return this.urlFromPath(path, base);
    }
  }, {
    key: 'forms',
    get: function get() {
      if (!this._forms) {
        this._forms = new _form2.default(this);
      }
      return this._forms;
    }
  }, {
    key: 'records',
    get: function get() {
      if (!this._records) {
        this._records = new _record2.default(this);
      }
      return this._records;
    }
  }, {
    key: 'changesets',
    get: function get() {
      if (!this._changesets) {
        this._changesets = new _changeset2.default(this);
      }
      return this._changesets;
    }
  }, {
    key: 'choiceLists',
    get: function get() {
      if (!this._choiceLists) {
        this._choiceLists = new _choiceList2.default(this);
      }
      return this._choiceLists;
    }
  }, {
    key: 'classificationSets',
    get: function get() {
      if (!this._classificationSets) {
        this._classificationSets = new _classificationSet2.default(this);
      }
      return this._classificationSets;
    }
  }, {
    key: 'authorizations',
    get: function get() {
      if (!this._authorizations) {
        this._authorizations = new _authorization2.default(this);
      }
      return this._authorizations;
    }
  }, {
    key: 'memberships',
    get: function get() {
      if (!this._memberships) {
        this._memberships = new _membership2.default(this);
      }
      return this._memberships;
    }
  }, {
    key: 'projects',
    get: function get() {
      if (!this._projects) {
        this._projects = new _project2.default(this);
      }
      return this._projects;
    }
  }, {
    key: 'layers',
    get: function get() {
      if (!this._layers) {
        this._layers = new _layer2.default(this);
      }
      return this._layers;
    }
  }, {
    key: 'photos',
    get: function get() {
      if (!this._photos) {
        this._photos = new _photo2.default(this);
      }
      return this._photos;
    }
  }, {
    key: 'videos',
    get: function get() {
      if (!this._videos) {
        this._videos = new _video2.default(this);
      }

      return this._videos;
    }
  }, {
    key: 'audio',
    get: function get() {
      if (!this._audio) {
        this._audio = new _audio2.default(this);
      }

      return this._audio;
    }
  }, {
    key: 'roles',
    get: function get() {
      if (!this._roles) {
        this._roles = new _role2.default(this);
      }

      return this._roles;
    }
  }]);
  return Client;
}();

exports.default = Client;
module.exports = exports['default'];
//# sourceMappingURL=client.js.map