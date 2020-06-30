serializer
getMethodSearchResultsJsonFrom: aSearchString
	| result matcher matchedMethods allMethods |
	matcher := SearchMatcher new.
	matcher searchTerm: aSearchString.
	allMethods := self buildMethodDict.
	matchedMethods := allMethods select: [:method | matcher matches: (method at: 'methodName')].
	result := Dictionary newFrom: {'methods' -> matchedMethods.}.
	^ result asJsonString