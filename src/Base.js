"use strict";

const wump = require("wumpfetch");
const base = "https://neko-love.xyz/api/v1/";

module.exports = (endpoint) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await wump(endpoint === "endpoint" ? base : `${base}${endpoint}`).send();
            if (data.statusCode !== 200) {
                reject(new Error(data));
            }
            resolve(endpoint === "endpoint" ? data.parse().endpoint : data.parse().url);
        } catch (error) {
            reject(new Error(error));
        }
    });
}
