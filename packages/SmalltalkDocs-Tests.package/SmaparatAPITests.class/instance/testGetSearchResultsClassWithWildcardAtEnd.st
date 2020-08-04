testing GetSearchResults
testGetSearchResultsClassWithWildcardAtEnd
	| contents classes |
	contents := self checkOkJsonResponseAt: '/env/search/classes/MockClass%'.
	classes := (contents at: 'classes').
	self assert: (classes includes: 'MockClassNoComment').
	self deny: (classes includes: 'SmapratMockClass').
	self assert: (classes allSatisfy: [:class |(class beginsWith: 'MockClass')]).