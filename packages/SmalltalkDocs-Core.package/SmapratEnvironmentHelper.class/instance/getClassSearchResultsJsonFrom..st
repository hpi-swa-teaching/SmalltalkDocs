serialize
getClassSearchResultsJsonFrom: aSearchString
	| matcher allClasses matchedClasses |
	matcher := SmapratSearchMatcher new.
	matcher searchTerm: aSearchString.
	allClasses := self usedEnvironment classNames.
	matchedClasses := allClasses select: [:class | matcher matches: class].
	^ (Dictionary newFrom: {'classes' -> matchedClasses}) asJsonString