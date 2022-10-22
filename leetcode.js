import config from "./config"
const baseurl = "https://leetcode.com";

const urls = new Map();
urls.set("login", "accounts/login");

const request1 = async (options) => {
    const init = {
        method: options.method || "GET",
        followRedirect: false,
        headers: {
            Cookie: options.setCookie
                ? `LEETCODE_SESSION=${config.LEETCODE_SESSION};csrftoken=${config.CSRFTOKEN}`
                : "",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRFToken": options.setCookie ? config.CSRFTOKEN : "",
            Referer: options.referer || "",
        },
        resolveWithFullResponse: options.resolveWithFullResponse || false,
        form: options.form || null,
    };
    if (init.method !== "GET") {
        init.body = JSON.stringify(options.body) || "";
    }
    console.table(init)

    return await fetch(options.url, init);
};
const HttpRequest = async (options) => {
    return await request({
        method: options.method || "GET",
        uri: options.url,
        followRedirect: false,
        headers: {
            Cookie: Helper.credit
                ? `LEETCODE_SESSION=${Helper.credit.session};csrftoken=${Helper.credit.csrfToken}`
                : "",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRFToken": Helper.credit ? Helper.credit.csrfToken : "",
            Referer: options.referer || Helper.uris.base,
        },
        resolveWithFullResponse: options.resolveWithFullResponse || false,
        form: options.form || null,
       // body: JSON.stringify(options.body) || "",
    });
};

const main = async() => {
    const res = await request1( {
        url: `${ baseurl }/${ urls.get( "login" ) }`,
        setCookie: true,
        resolveWithFullResponse: true,
        referer:baseurl
    } );
    console.log(res)
};
main()
