as yet unclassified
testMatchStringWithOneWildcard
	| searchTerm |
	searchTerm := 'a%a'.
	self searchMatcher searchTerm: searchTerm.
	self deny: (self searchMatcher matches: 'bb').
	self assert: (self searchMatcher matches: 'aa').
	self assert: (self searchMatcher matches: 'aba').
	self deny: (self searchMatcher matches: 'a').
	self deny: (self searchMatcher matches: 'ab').
	self deny: (self searchMatcher matches: 'ba').