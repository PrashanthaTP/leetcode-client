import { readFileSync, writeFileSync } from "fs";
import cli from "./lib/cli";
import { fetchQuery } from "./lib/requests";
import queries from "./queries/queries";
import { connectProcess } from "./utils/shell";

const printHelp = () => {
    //https://stackoverflow.com/questions/9153571/is-there-a-way-to-get-version-from-package-json-in-nodejs-code
    const helpStr = `\
    \x1b[1;33mLeetcode Api Client\x1b[0m (v${process.env.npm_package_version})
    Command Line arguments:
    -h / --help                         : Print Help
    -d / --get-daily-challenge-question : Print Leetcode Daily Challenge Question Content To Stdout
    -o / --output                       : File to which stdout will be written
    `;
    console.log(helpStr);
};
const getDailyChallenge = fetchQuery.bind(this, queries.getDailyChallengeQuery);

const saveQuestion = (outputFile, { title, content, codeSnippets }) => {
    const saveOuputToFile = (exe1, exe2, error1, error2, output) => {
        if (error1.length > 0) {
            console.error(
                `\x1b[31m[ERROR]\x1b[0m] program ${exe1} : ${error1}`
            );
        }
        if (error2.length > 0) {
            console.error(
                `\x1b[31m[ERROR]\x1b[0m] program ${exe2} : ${error2}`
            );
        }
        writeFileSync( outputFile, output );
        console.log(`${outputFile} saved.`)
    };

    const pythonCodeSnippet = codeSnippets.filter(
        (item) => item.lang.toLowerCase() === "python3"
    )[0].code;
    connectProcess(
        "echo",
        [
            "-e",
            `<h1>${title}</h1>\n\n${content}\n<h3>Solution</h3>\n<code>${pythonCodeSnippet}</code>`,
        ],
        "pandoc",
        ["--from", "html", "--to", "markdown"],
        saveOuputToFile
    );
};
const writeOutput = (options, data) => {
    if (!options["output"] || options["output"] === "console") {
        process.stdout.write(JSON.stringify(data));
    } else {
        const { title, content, codeSnippets } =
            data.activeDailyCodingChallengeQuestion.question;
        saveQuestion(options["output"], {
            title,
            content,
            codeSnippets,
        });
    }
};

const showError = (err) => {
    console.error(err.message);
};

cli.config({
    help: printHelp,
    getDailyChallenge: (options) => {
        if (process.env.USE_CACHE) {
            writeOutput(options, JSON.parse(readFileSync("./.cache.json")));
            return;
        }
        let data = null;
        getDailyChallenge()
            .then((res) => writeOutput(options, res.data.data))
            .catch((err) => {
                showError(err);
            });
        return data;
    },
    default: printHelp,
});
