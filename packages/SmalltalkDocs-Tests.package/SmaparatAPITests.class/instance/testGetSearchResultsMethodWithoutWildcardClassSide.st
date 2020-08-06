testing GetSearchResults
testGetSearchResultsMethodWithoutWildcardClassSide
	| contents methods |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/search/methods/classMethod1'.
	methods := contents at: 'methods'.
	self assert: (methods anySatisfy: [:method | ((method at: 'className') = 'SmapratMockClass') and: [((method at: 'side') = 'class') and: [((method at: 'methodName') = 'classMethod1')]]]).