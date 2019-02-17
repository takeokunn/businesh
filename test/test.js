const test = require('ava');
const businesh = require('../dist/bundle.umd');
const before_text = '任意の文字列をビジネッシュ・テキストに変換するライブラリです。';

test('test', t => businesh.translate(before_text).then(after_text => t.not(before_text, after_text)));
