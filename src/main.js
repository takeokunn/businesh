const axios = require('axios');
const libxmljs = require('libxmljs');
const querystring = require('querystring');

const XPATH = '//textarea[@name="after"]';
const URL = 'https://bizwd.net/';

export const translate = (text, translate_level = 2) => {
    return new Promise((resolve, reject) => {
        const level = translate_level === 1? 1 : 2;
        const params = {
            level: level,
            before: text,
            auto_flag: true,
            transbtn: '翻訳'
        };
        axios.post(URL, querystring.stringify(params))
            .then(res => libxmljs.parseHtml(res.data).get(XPATH).text())
            .then(txt => resolve(txt))
            .catch(err => reject(err));
    });
};
