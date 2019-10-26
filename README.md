## Neko-Love.js
Official module of the Neko-Love API

## Installation

```
npm install neko-love.js --save
```

## Example

```js
const Base = require("neko-love.js");

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

*   neko
*   kitsune
*   hug
*   pat
*   waifu
*   cry
*   kiss

### NSFW

*   nekolewd

[Full Neko Love API documentation](https://docs.neko-love.xyz/)

## Links

*   [Website](https://neko-love.xyz)
*   [Documentation](https://docs.neko-love.xyz/)
*   [Discord](https://discord.gg/byThR3v)
*   [NPM](https://npmjs.com/neko-love.js)
