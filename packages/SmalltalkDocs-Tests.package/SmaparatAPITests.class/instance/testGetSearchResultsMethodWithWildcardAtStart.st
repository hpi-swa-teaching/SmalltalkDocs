testing GetSearchResults
testGetSearchResultsMethodWithWildcardAtStart
	| contents methods |
	contents := self checkOkJsonResponseAt: '/env/search/methods/%method'.
	methods  := contents at: 'methods'.
	self assert: ((methods collect: [:method | method at: 'methodName']) allSatisfy: [:methodName| methodName endsWith: 'method']).
	self assert: ((methods collect: [:method | method at: 'className']) includes: 'SmapratMockClass').
	self assert: (methods noneSatisfy: [:method | (method at: 'className') = 'MockHelpBook']).