serialize
getMethodSearchResultsJsonFrom: aSearchString
	| matcher matchedMethods allMethods |
	matcher := SmapratSearchMatcher new.
	matcher searchTerm: aSearchString.
	allMethods := self getMethodDict.
	matchedMethods := allMethods select: [:method | matcher matches: (method at: 'methodName')].
	^ (Dictionary newFrom: {'methods' -> matchedMethods.}) asJsonString