testing GetSearchResults
testGetSearchResultsClassWithWildcardAtEnd
	| contents classes |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/search/classes/SmapratMockClass%'.
	classes := (contents at: 'classes').
	self assert: (classes includes: 'SmapratMockClassNoComment').
	self assert: (classes includes: 'SmapratMockClass').
	self assert: (classes allSatisfy: [:class |(class beginsWith: 'SmapratMockClass')]).