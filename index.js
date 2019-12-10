"use strict";

const { get } = require("https");
const base = "https://neko-love.xyz/api/v1/";

module.exports = async (endpoint) => {
    if (!endpoint) {
        return console.log(`Error endpoint invalid`);
    }
    const type = endpoint === "endpoint" ? true : false;
    const url = new URL(endpoint === "endpoint" ? base : `${base}${endpoint}`);
    try {
        await getContext(url.toString(), type);
    } catch (error) {
        console.log(`Error ${error.message}`);
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
                    reject(error.message);
                }
            });
        }).on("error", (err) => {
            reject(err.message);
        });
    });
}
