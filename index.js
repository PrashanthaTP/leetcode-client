import axios from "axios";
import config from "./config/config";
import queries from "./queries/queries";


const testPostReq = async () => {
    const data = await axios({
        url: "http://localhost:8000/api/get",
        method: "POST",
        data: {
            LEETCODE_SESSION: config.LEETCODE_SESSION,
            CSRFTOKEN: config.CSRFTOKEN,
            queryData: queries.getDailyChallengeQuery,
        },
    });
    return data.data.data;
};

console.log(
    testPostReq().then((res) =>
        console.log(res.data.data.activeDailyCodingChallengeQuestion.question)
    )
);
