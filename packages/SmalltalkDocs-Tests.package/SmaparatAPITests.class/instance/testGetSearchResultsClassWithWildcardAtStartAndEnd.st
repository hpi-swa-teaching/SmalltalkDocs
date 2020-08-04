testing GetSearchResults
testGetSearchResultsClassWithWildcardAtStartAndEnd
	| contents classes |	
	contents := self checkOkJsonResponseAt: '/env/search/classes/%MockClass%'.
	classes := (contents at: 'classes').
	self assert: (classes includes: 'MockClassNoComment').
	self assert: (classes includes: 'SmapratMockClass').
	self assert: (classes allSatisfy: [:class |(class includesSubstring: 'MockClass')]).