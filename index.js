"use strict";

const { get } = require("https");
const base = "https://neko-love.xyz/api/v1/";

module.exports = async (endpoint) => {
    const url = new URL(endpoint === "endpoint" ? base : `${base}${endpoint}`);
    try {
        return await getContext(url.toString(), endpoint === "endpoint" ? true : false);
    } catch (error) {
        return console.error(`Error ${error.message}`);
    }
};

function getContext(url, type) {
    return new Promise((resolve, reject) =>  {
        get(url, (res) => {
            const { statusCode } = res;
            if (statusCode !== 200) {
                res.resume();
                reject(`Error Request Status Code ${statusCode}`);
            }
            res.setEncoding("utf8");
            let rawData = "";
            res.on("data", (chunk) => {
                rawData += chunk;
            });
            res.on("end", () => {
                try {
                    const parseData = JSON.parse(rawData);
                    resolve(type ? parseData.endpoint : parseData.url);
                } catch (error) {
                    reject(`Error ${error.message}`);
                }
            });
        }).on("error", (err) => {
            reject(`Error ${error.message}`);
        });
    });
}
