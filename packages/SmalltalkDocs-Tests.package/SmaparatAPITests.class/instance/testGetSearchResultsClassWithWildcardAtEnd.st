testing GetSearchResults
testGetSearchResultsClassWithWildcardAtEnd
	| result contents classes |	
	result := RPTestHelper get: '/env/search/classes/MockClass%' on: self api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	classes := (contents at: 'classes').
	self assert: (classes includes: 'MockClassNoComment').
	self deny: (classes includes: 'SmapratMockClass').
	self assert: (classes allSatisfy: [:class |(class beginsWith: 'MockClass')]).