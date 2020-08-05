testing
testMatchStringWithTwoWildcards
	| searchTerm |
	searchTerm := 'a%b%c'.
	self searchMatcher searchTerm: searchTerm.
	self deny: (self searchMatcher matches: 'aabbcs').