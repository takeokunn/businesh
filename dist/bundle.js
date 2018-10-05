(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.businesh = {})));
}(this, (function (exports) { 'use strict';

    var axios = require('axios');

    var libxmljs = require("libxmljs");

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
          var dom = libxmljs.parseHtml(res.data);
          return dom.get(XPATH).text();
        }).then(function (txt) {
          return resolve(txt);
        }).catch(function (err) {
          return reject(err);
        });
      });
    };
    translate("任意の文字列をビジネッシュ・テキストに変換するライブラリです。").then(function (txt) {
      return console.log(txt);
    }).catch(function (err) {
      return console.log(err);
    });

    exports.translate = translate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bundle.js.map
