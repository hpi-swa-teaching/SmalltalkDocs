testing
testMatchStringSimple
	| searchTerm |
	searchTerm := 'aa'.
	self searchMatcher searchTerm: searchTerm.
	self deny: (self searchMatcher matches: 'bb').
	self assert: (self searchMatcher matches: 'aa').
	self assert: (self searchMatcher matches: 'aab').
	self assert: (self searchMatcher matches: 'aaba').
	self assert: (self searchMatcher matches: 'aabaa').
	self assert: (self searchMatcher matches: 'baab').