//get all the argments
//argv[0] = node
//argv[1] = filename

//argv[>=2] = arguments passed

export const config = (callbacks) => {
    const args = process.argv.slice(2);
    switch (args[0]) {
        case "-h":
        case "--help":
            callbacks["h"]();
            break;
		case "-d":
			callbacks[ "d" ]();
			break;
		default:
			callbacks[ "default" ]();
    }
};
export default {config}
