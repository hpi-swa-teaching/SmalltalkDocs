testing GetSearchResults
testGetSearchResultsClassWithWildcardBetween
	| contents classes |
	contents := self checkOkJsonResponseAt:'/env/search/classes/MockClass%mment'.
	classes := (contents at: 'classes').
	self assert: (classes includes: 'MockClassNoComment').
	self deny: (classes includes: 'MockClass').
	self assert: (classes allSatisfy: [:class |( class beginsWith: 'MockClass') and: [class endsWith: 'mment']]).