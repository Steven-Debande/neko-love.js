"use strict";

const wump = require("wumpfetch");
const base = "https://neko-love.xyz/api/v1/";

module.exports = async (endpoint) => {
    try {
        const data = await wump(endpoint === "endpoint" ? base : `${base}${endpoint}`).send();
        if (data.statusCode !== 200) {
            return new Error(data);
        } else {
            return endpoint === "endpoint" ? data.parse().endpoint : data.parse().url;
        }
    } catch (error) {
        return new Error(error);
    }
};
