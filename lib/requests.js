import axios from "axios";
import config from "../config/config";

export const fetchQuery = async (query) => {
    const data = await axios({
        url: config.queryPostUrl,
        method: "POST",
        data: {
            LEETCODE_SESSION: config.env.LEETCODE_SESSION,
            CSRFTOKEN: config.env.CSRFTOKEN,
            queryData: query,
        },
    });
    return data.data.data;
};
export default { fetchQuery };
