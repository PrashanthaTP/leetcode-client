import axios from "axios";
import { assert } from "console";

import config from "../config/config";
import { fetchQuery } from "../lib/requests";
import queries from "../queries/queries";

const test = () => {
    console.log(
        fetchQuery(queries.getDailyChallengeQuery).then((res) =>
            // console.log(res.data.data.activeDailyCodingChallengeQuestion.question)
            console.log(res.data)
        )
    );
};
const testBind = async () => {
    const getDailyChallenge = fetchQuery.bind(
        this,
        queries.getDailyChallengeQuery
    );
    let data = null;
    await getDailyChallenge()
        .then((res) => (data=res))
        .catch((err) => (data = null));
    return data
};
const main = async () => {
    test();
    let res = await testBind();
    if ( res!==null ) {
        console.log("✅ bind function working!!!")
    }
};
main();
