import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

//Node.js 10 supports ECMAScript modules, where __dirname and __filename are no longer available.
//https://stackoverflow.com/a/50053801/12988588
//https://stackoverflow.com/a/55859500/12988588
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const configFilePath = path.resolve(__dirname, "../.env.json");
const configDataRaw = readFileSync(configFilePath);
const config = JSON.parse( configDataRaw );

export default config;
