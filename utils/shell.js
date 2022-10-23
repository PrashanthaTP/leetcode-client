import { spawn } from "child_process";

export const connectProcess = (exe1, args1, exe2, args2, callback) => {
    const program1 = spawn(exe1, args1);
    const program2 = spawn(exe2, args2);
    let error1 = "";
    let error2 = "";
    let output = "";
    program1.stdout.on("data", (chunk) => {
        program2.stdin.write(chunk);
    });
    program1.stderr.on("data", (err) => {
        error1 += err.toString();
    });
    program1.on("exit", (code) => {
        if (code !== 0) {
            error1 += `exited with code ${code}`;
        } else {
            program2.stdin.end();
        }
    });
    program2.stdout.on("data", (chunk) => {
        output += chunk.toString();
    });
    program2.stderr.on("data", (err) => {
        error2 += err.toString();
    });
    program2.on("exit", (code) => {
        if (code != 0) {
            error2 += `exited with code ${code}`;
        }
        callback(exe1, exe2, error1, error2, output);
    });
};

export default { connectProcess };
