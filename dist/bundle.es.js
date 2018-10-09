var axios = require('axios');

var libxmljs = require('libxmljs');

var querystring = require('querystring');

var XPATH = '//textarea[@name="after"]';
var URL = 'https://bizwd.net/';
var translate = function translate(text) {
  var translate_level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return new Promise(function (resolve, reject) {
    var level = translate_level === 1 ? 1 : 2;
    var params = {
      level: level,
      before: text,
      auto_flag: true,
      transbtn: '翻訳'
    };
    axios.post(URL, querystring.stringify(params)).then(function (res) {
      return libxmljs.parseHtml(res.data).get(XPATH).text();
    }).then(function (txt) {
      return resolve(txt);
    }).catch(function (err) {
      return reject(err);
    });
  });
};

export { translate };
//# sourceMappingURL=bundle.es.js.map
