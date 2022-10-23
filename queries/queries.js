export const getExampleQuestionQuery = {
    operationName: "questionData",
    variables: { titleSlug: "path-sum" },
    query: `
	query questionData(: String\!) {
	question(titleSlug: ) {
		questionId
		questionFrontendId
		boundTopicId
		title
		titleSlug
		content
		translatedTitle
		translatedContent
		isPaidOnly
		difficulty
		likes
		dislikes
		isLiked
		similarQuestions
		exampleTestcases
		categoryTitle
		contributors {
		username
		profileUrl
		avatarUrl
		__typename
		}
		topicTags {
		name
		slug
		translatedName
		__typename
		}
		companyTagStats
		codeSnippets {
		lang
		langSlug
		code
		__typename
		}
		stats
		hints
		solution {
		id
		canSeeDetail
		paidOnly
		hasVideoSolution
		paidOnlyVideo
		__typename
		}
		status
		sampleTestCase
		metaData
		judgerAvailable
		judgeType
		mysqlSchemas
		enableRunCode
		enableTestMode
		enableDebugger
		envInfo
		libraryUrl
		adminUrl
		challengeQuestion {
		id
		date
		incompleteChallengeCount
		streakCount
		type
		__typename
		}
		__typename
	}
}
`,
};

export const getDailyChallengeQuery = {
	operationName: "questionOfToday",
	query: `query questionOfToday {
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
					content
					titleSlug
					hasVideoSolution
					hasSolution
					codeSnippets {
					lang
					langSlug
					code
					__typename
					}
					topicTags {
							name
							id
							slug
					}
			}
	}
}`,
}

export default {
    getExampleQuestionQuery,
    getDailyChallengeQuery,
};
