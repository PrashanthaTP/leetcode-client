import axios from "axios";
import config from "./config";

const body2 = `{"operationName":"getContestRankingData","variables":{"username":"aditi"},"query":"query getContestRankingData($username: String!) {\
                userContestRanking(username: aditi) {\
                attendedContestsCount\
                rating\
                globalRanking\
                }\
            }\
            "}`;
const test = () => {
    fetch(url, {
        method: "POST",
        headers: {
            accept: "*/*",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7,ru;q=0.6",
            "cache-control": "no-cache",
            "content-type": "application/json",
            pragma: "no-cache",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua":
                '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        mode: "cors",
        body: body2,
    })
        .then((res) => res.json())
        .then((data) => {
            console.table(data);
        });
};

// Just some constants
const LEETCODE_API_ENDPOINT = "https://leetcode.com/graphql";
const DAILY_CODING_CHALLENGE_QUERY = `query questionOfToday {
	activeDailyCodingChallengeQuestion {
		date
		userStatus
		link
		question {
			acRate
			difficulty
			freqBar
			frontendQuestionId: questionFrontendId
			isFavor
			paidOnly: isPaidOnly
			status
			title
			titleSlug
			hasVideoSolution
			hasSolution
			topicTags {
				name
				id
				slug
			}
		}
	}
}`;

const testPostReq = async () => {
    const globalQuery = {
        operationName: "questionData",
        variables: { titleSlug: "path-sum" },
        query: "query questionData($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    questionFrontendId\n    boundTopicId\n    title\n    titleSlug\n    content\n    translatedTitle\n    translatedContent\n    isPaidOnly\n    difficulty\n    likes\n    dislikes\n    isLiked\n    similarQuestions\n    exampleTestcases\n    categoryTitle\n    contributors {\n      username\n      profileUrl\n      avatarUrl\n      __typename\n    }\n    topicTags {\n      name\n      slug\n      translatedName\n      __typename\n    }\n    companyTagStats\n    codeSnippets {\n      lang\n      langSlug\n      code\n      __typename\n    }\n    stats\n    hints\n    solution {\n      id\n      canSeeDetail\n      paidOnly\n      hasVideoSolution\n      paidOnlyVideo\n      __typename\n    }\n    status\n    sampleTestCase\n    metaData\n    judgerAvailable\n    judgeType\n    mysqlSchemas\n    enableRunCode\n    enableTestMode\n    enableDebugger\n    envInfo\n    libraryUrl\n    adminUrl\n    challengeQuestion {\n      id\n      date\n      incompleteChallengeCount\n      streakCount\n      type\n      __typename\n    }\n    __typename\n  }\n}\n",
    };
    const dailyChallengeQuery = {
        operationName: "questionOfToday",
        query: "query questionOfToday{\n\tactiveDailyCodingChallengeQuestion {\n\t\tdate\n\t\tuserStatus\n\t\tlink\n\t\tquestion {\n\t\t\tacRate\n\t\t\tdifficulty\n\t\t\tfreqBar\n\t\t\tfrontendQuestionId: questionFrontendId\n\t\t\tisFavor\n\t\t\tpaidOnly: isPaidOnly\n\t\t\tstatus\n\t\t\ttitle\n\t\t\ttitleSlug\n\t\t\thasVideoSolution\n\t\t\thasSolution\n\t\t\ttopicTags {\n\t\t\t\tname\n\t\t\t\tid\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t}\n}\n",
    };
    const testQuery = {
        query: "\n    query questionOfToday {\n  activeDailyCodingChallengeQuestion {\n    date\n    userStatus\n    link\n    question {\n      acRate\n      difficulty\n      freqBar\n      frontendQuestionId: questionFrontendId\n      isFavor\n      paidOnly: isPaidOnly\n      status\n      title\n      titleSlug\n      hasVideoSolution\n      hasSolution\n      topicTags {\n        name\n        id\n        slug\n      }\n    }\n  }\n}\n    ",
        variables: {},
    };
    const data = await axios({
        url: "http://localhost:8000/api/get",
        method: "POST",
        data: {
            LEETCODE_SESSION: config.LEETCODE_SESSION,
            CSRFTOKEN: config.CSRFTOKEN,
            queryData: testQuery,
        },
    });
    return data.data.data;
};
console.log(testPostReq().then((res) => console.log(res.data)));
