testing
testMatchStringWithWildcardAtEnd
	| searchTerm |
	searchTerm := 'a%'.
	self searchMatcher searchTerm: searchTerm.
	self deny: (self searchMatcher matches: 'ba').
	self assert: (self searchMatcher matches: 'aa').
	self assert: (self searchMatcher matches: 'abfsdfs').
	self deny: (self searchMatcher matches: '').
	self deny: (self searchMatcher matches: 'b').
	self deny: (self searchMatcher matches: 'bbbba').