import axios from "axios";

import config from "../config/config";
import queries from "../queries/queries";

const testPostReq = async () => {
    const data = await axios({
        url: "http://localhost:8000/api/v1/query",
        method: "POST",
        data: {
            LEETCODE_SESSION: config.env.LEETCODE_SESSION,
            CSRFTOKEN: config.env.CSRFTOKEN,
            queryData: queries.getDailyChallengeQuery,
        },
    });
    return data.data.data;
};

const test = () => {
    console.log(
        testPostReq().then((res) =>
            // console.log(res.data.data.activeDailyCodingChallengeQuestion.question)
            console.log(res.data)
        )
    );
};

test()
