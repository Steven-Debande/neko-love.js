## Neko-Love.js
Official module of the Neko-Love API

[![npm](https://img.shields.io/npm/v/neko-love.js.svg)](https://www.npmjs.com/package/neko-love.js)
[![npm](https://img.shields.io/npm/dt/neko-love.js.svg?maxAge=3600)](https://www.npmjs.com/package/neko-love.js)
[![install size](https://packagephobia.now.sh/badge?p=neko-love.js)](https://packagephobia.now.sh/result?p=neko-love.js)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dc36a8e4e6b5476d914baadba9e36714)](https://www.codacy.com/manual/Steven-Debande/neko-love.js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Steven-Debande/neko-love.js&amp;utm_campaign=Badge_Grade)

[![NPM](https://nodei.co/npm/neko-love.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/neko-love.js/)

## Installation

```
npm install neko-love.js --save
```

## Example

```js
const { Base } = require("neko-love.js");

Base("neko").then((url) => {
    console.log(url); // https://neko-love.xyz/v1/neko/neko-love_314.png
});

Base("endpoint").then((url) => {
    console.log(url); 
    /*
    [ 'neko',
    'nekolewd',
    'kitsune',
    'pat',
    'hug',
    'waifu',
    'cry',
    'kiss',
    'slap' ]
    */
});
```

## Endpoints

### SFW

| Function | Description |
| -------- | ----------- |
| `neko` | Get a URL of a neko image |
| `slap` | Gets a URL of a slap image/gif |
| `pat`  | Get a URL of a pat image/gif |
| `kiss` | Get a URL of a kiss image/gif |
| `hug`  | Get a URL of a hug image/gif |
| `kitsune` | Get a URL of a fox girl image |
| `pat` | Get a URL of a pat image/gif |
| `cry` | Get a URL of a cry image/gif |
| `waifu` | Get a URL of a waifu image |

### NSFW

| Function | Description |
| -------- | ----------- |
| `nekolewd` | Get a URL of a neko hentai image |

[Full Neko Love API documentation](https://docs.neko-love.xyz/)

## Links

*   [Website](https://neko-love.xyz)
*   [Documentation](https://docs.neko-love.xyz/)
*   [Discord](https://discord.gg/byThR3v)
*   [NPM](https://npmjs.com/neko-love.js)
