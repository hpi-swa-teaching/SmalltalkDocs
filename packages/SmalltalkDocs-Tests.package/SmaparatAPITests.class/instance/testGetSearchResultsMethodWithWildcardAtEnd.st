testing GetSearchResults
testGetSearchResultsMethodWithWildcardAtEnd
	| contents methods |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/search/methods/method%'.
	methods  := contents at: 'methods'.
	self assert: ((methods collect: [:method | method at: 'methodName']) allSatisfy: [:methodName| methodName beginsWith: 'method']).
	self assert: ((methods collect: [:method | method at: 'className']) includes: 'SmapratMockClass').
	self assert: (methods noneSatisfy: [:method | (method at: 'className') = 'SmapratMockHelpBook']).