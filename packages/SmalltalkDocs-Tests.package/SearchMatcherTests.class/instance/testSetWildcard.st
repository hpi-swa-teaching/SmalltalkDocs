testing
testSetWildcard
	self searchMatcher wildcard: '$'.
	self assert: self searchMatcher wildcard equals: '$'.
	self deny: (self searchMatcher wildcard = '%').
	self searchMatcher wildcard: self searchMatcher defaultWildcard.