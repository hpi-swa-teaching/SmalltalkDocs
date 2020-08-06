testing GetSearchResults
testGetSearchResultsClassWithWildcardAtStartAndEnd
	| contents classes |	
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/search/classes/%MockClass%'.
	classes := (contents at: 'classes').
	self assert: (classes includes: 'SmapratMockClassNoComment').
	self assert: (classes includes: 'SmapratMockClass').
	self assert: (classes allSatisfy: [:class |(class includesSubstring: 'MockClass')]).