testing
testSetSearchTerm
	| searchTerm |
	searchTerm := 'dasistmein%Super%SchickerSearchTerm%'.
	self searchMatcher searchTerm: searchTerm.
	self assert: searchTerm equals: self searchMatcher searchTerm.