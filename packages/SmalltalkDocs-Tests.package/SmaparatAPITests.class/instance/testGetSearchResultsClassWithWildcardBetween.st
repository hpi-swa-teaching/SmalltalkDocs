testing GetSearchResults
testGetSearchResultsClassWithWildcardBetween
	| contents classes |
	contents := self checkOkJsonResponseAndGetContentsAt:'/env/search/classes/SmapratMockClass%mment'.
	classes := (contents at: 'classes').
	self assert: (classes includes: 'SmapratMockClassNoComment').
	self deny: (classes includes: 'SmapratMockClass').
	self assert: (classes allSatisfy: [:class |(class beginsWith: 'SmapratMockClass') and: [class endsWith: 'mment']]).