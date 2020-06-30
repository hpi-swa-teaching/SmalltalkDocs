testing GetSearchResults
testGetSearchResultsMethodWithWildcardAtStart
	| result contents methods |	
	result := RPTestHelper get: '/env/search/method/%method' on: self api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	methods  := contents at: 'methods'.
	self assert: ((methods collect: [:method | method at: 'methodName']) allSatisfy: [:methodName| methodName endsWith: 'method']).
	self assert: ((methods collect: [:method | method at: 'className']) includes: 'SmapratMockClass').
	self assert: (methods noneSatisfy: [:method | (method at: 'className') = 'MockHelpBook']).