serializer
getMethodSearchResultsJsonFrom: aSearchString
	| result matcher matchedMethods allMethods |
	matcher := SmapratSearchMatcher new.
	matcher searchTerm: aSearchString.
	allMethods := self getMethodDict.
	matchedMethods := allMethods select: [:method | matcher matches: (method at: 'methodName')].
	result := Dictionary newFrom: {'methods' -> matchedMethods.}.
	^ result asJsonString