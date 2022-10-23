import axios from "axios";
import config from "./config/config";
import cli from "./lib/cli"
import queries, { getDailyChallengeQuery } from "./queries/queries";

const printHelp = () => {
    //https://stackoverflow.com/questions/9153571/is-there-a-way-to-get-version-from-package-json-in-nodejs-code
    const helpStr = `\
    \x1b[1mLeetcode Api Client\x1b[0m (v${ process.env.npm_package_version})
    Command Line arguments:
    -h / --help                         : Print Help
    -d / --get-daily-challenge-question : Print Leetcode Daily Challenge Question Content To Stdout
    -a / --get-daily-challenge-code-tpl : Print Leetcode Daily Challenge Starter Code To Stdout
    `;
    console.log(helpStr);
}
cli.config( {
    "h": printHelp,
    "d": ()=>{console.error("Not Configured...")},
    "default":printHelp
})
