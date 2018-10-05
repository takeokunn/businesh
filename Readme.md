## Businesh Translate Tool(ビジネッシュ翻訳)
[![CircleCI](https://circleci.com/gh/takeokunn/businesh/tree/master.svg?style=svg)](https://circleci.com/gh/takeokunn/businesh/tree/master)

## How to use
```js
const before_text = '任意の文字列をビジネッシュ・テキストに変換するライブラリです。';
businesh.translate(before_text)
    .then(after_text => {
        // 半強制のコンテクストをハイクオリティなビジネス的サティスファクション・テキストにコンバートフレキシブルに対応するフィジビリティスタディって、この前読んだビジネス書に書いてあった、実例もたくさんある。
        console.log(after_text)
    })
    .catch(err => console.log(err));
```

## Licence
MIT
