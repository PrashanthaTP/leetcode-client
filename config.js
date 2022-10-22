import {readFielSync} from "fs"
const configRaw = readFileSync( ".env.json" )
export const config = JSON.parse( configRaw )
export default config;
