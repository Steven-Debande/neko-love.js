"use strict";

const { get } = require("https");
const base = "https://neko-love.xyz/api/v1/";

module.exports = (endpoint) => {
    get(endpoint === "endpoint" ? base : `${base}${endpoint}`, (res) => {
        const { statusCode } = res;
        if (statusCode !== 200) {
            res.resume;
        }
        res.setEncoding("utf8");
        let rawData = "";
        res.on("data", (chunk) => {
            rawData += chunk;
        });
        res.on("end", () => {
            try {
                const parsedData = JSON.parse(rawData);
                return endpoint === "endpoint" ? parsedData.endpoint : parsedData.url;
            } catch (error) {
                console.error(e.message);
            }
        });
    }).on("error", (err) => {
        console.error(err.message);
    });
};
