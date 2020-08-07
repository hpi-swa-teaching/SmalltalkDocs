testing GetSearchResults
testGetSearchResultsClassWithoutWildcard
	| contents classes |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/search/classes/SmapratMockClass'.
	classes := (contents at: 'classes').
	self deny: (classes includes: 'MockClassNoComment').
	self assert: (classes includes: 'SmapratMockClass').
	self assert: (classes allSatisfy: [:class |(class includesSubstring: 'SmapratMockClass')]).