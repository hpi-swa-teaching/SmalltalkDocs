testing GetSearchResults
testGetSearchResultsMethodWithoutWildcardClassSide
	| result contents methods |	
	result := RPTestHelper get: '/env/search/methods/classMethod1' on: self api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	methods := contents at: 'methods'.
	self assert: (methods anySatisfy: [:method | ((method at: 'className') = 'SmapratMockClass') and: [((method at: 'side') = 'class') and: [((method at: 'methodName') = 'classMethod1')]]]).