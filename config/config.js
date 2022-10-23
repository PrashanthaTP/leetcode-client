import { readFileSync } from "fs";
import path from "path";
import { getDirname } from "../utils";

const __dirname = getDirname(import.meta.url)
const configFilePath = path.resolve(__dirname, "../.env.json");
const configDataRaw = readFileSync(configFilePath);
const config = JSON.parse( configDataRaw );

export default config;
