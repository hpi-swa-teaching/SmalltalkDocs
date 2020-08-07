testing GetSearchResults
testGetSearchResultsMethodWithoutWildcard
	| contents methods |
	self flag: 'Add another test.'.
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/search/methods/method1'.
	methods := contents at: 'methods'.
	self assert: (methods anySatisfy: [:method | ((method at: 'className') = 'SmapratMockClass') and: [((method at: 'side') = 'instance') and: [((method at: 'methodName') = 'method1')]]]).