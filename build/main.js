'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var translation = function translation() {

    var language = 'original';

    function translate(target, override) {
        var lang = override || language;
        if (!_lodash2.default.isString(target) && !_lodash2.default.isObject(target)) {
            throw new Error('Cannot translate target \'' + target + '\'');
        }
        if (target && _lodash2.default.isString(target)) {
            return target;
        }

        return _lodash2.default.has(target, lang) ? target[lang] : target.original;
    }

    function init(lang) {
        language = lang || language;
        return {
            _: translate
        };
    }

    return init;
}();

module.exports = translation;
//# sourceMappingURL=main.js.map
