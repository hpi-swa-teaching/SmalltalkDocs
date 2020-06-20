as yet unclassified
getSearchResult: aSearchTerm
	<get: '/env/search/([\w%]+)'>
	| result matcher allCategories matchedCategories allClasses matchedClasses matchedMethods|
	matcher := SearchMatcher new.
	matcher searchTerm: aSearchTerm.
	allCategories := Environment current packageOrganizer packageNames.
	allClasses := Environment current classNames.
	matchedClasses := allClasses select: [:class | matcher matches: class].
      "matchedMethods := allClasses ."
	result := Dictionary newFrom: {'categories' -> #(). 'methods' -> #(). 'classes' -> matchedClasses}.
	self sendJson: result asJsonString.