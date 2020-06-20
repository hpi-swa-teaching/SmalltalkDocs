as yet unclassified
testSetWildcard
	self searchMatcher wildcard: '$'.
	self assert: self searchMatcher wildcard equals: '$'.
	self deny: self searchMatcher wildcard equals: '%'.
	self searchMatcher wildcard: self searchMatcher defaultWildcard.