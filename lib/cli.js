//get all the argments
//argv[0] = node
//argv[1] = filename

//argv[>=2] = arguments passed
const parse = (args) => {
    let options = {};
    let idx = 0;
    while (idx < args.length) {
        switch (args[idx]) {
            case "-h":
            case "--help":
                options["help"] = true;
                break;
            case "-d":
            case "--get-daily-challenge-question":
                options["getDailyChallenge"] = true;
                break;
            case "-o":
            case "--output":
                if ( idx + 1 < args.length ) {
                    options[ "output" ] = args[idx+1]
                    idx+=1
                } else {
                    options["output"] = "console"
                }
                break;
            default:
                options[ "unknown" ] = args[ idx ]
                break
        }
        idx+=1
    }
    return options
};
export const config = (callbacks) => {
    const args = process.argv.slice( 2 );
    let data = null;
    const options = parse( args )
    if ( options[ "help" ] ) {
        callbacks[ "help" ]()
        return
    }
    if ( options[ "getDailyChallenge" ] ) {
        data = callbacks["getDailyChallenge"](options)
    }
};
export default { config };
