testing GetSearchResults
testGetSearchResultsClassWithWildcardAtStart
	| contents classes |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/search/classes/%MockClass'.
	classes := (contents at: 'classes').
	self deny: (classes includes: 'MockClassNoComment').
	self assert: (classes includes: 'SmapratMockClass').
	self assert: (classes allSatisfy: [:class |(class endsWith: 'MockClass')]).