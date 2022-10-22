import config from "./config"
const url = "https://leetcode.com/graphql";
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
}

// Just some constants
const LEETCODE_API_ENDPOINT = "https://leetcode.com/graphql";
const DAILY_CODING_CHALLENGE_QUERY = `
query questionOfToday {
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

// We can pass the JSON response as an object to our createTodoistTask later.
const fetchDailyCodingChallenge = async () => {
    console.log(`Fetching daily coding challenge from LeetCode API.`);
    document.cookie = config.COOKIE
    console.log("Cookie Set");
    console.table(document.cookie);
    const init = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: DAILY_CODING_CHALLENGE_QUERY }),
        referrer: "https://leetcode.com",
        referrerPolicy: "strict-origin-when-cross-origin",
        from: {
            csrfmiddlewaretoken:config.csrfmiddlewaretoken,
            login: "",
            password: "",
        },
    };

    const response = await fetch(LEETCODE_API_ENDPOINT, init);
    return response.json();
};

console.log(document.cookie);
console.log(fetchDailyCodingChallenge());
