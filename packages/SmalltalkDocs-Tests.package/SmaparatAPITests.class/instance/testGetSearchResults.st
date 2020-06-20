testing
testGetSearchResults
	| result contents |
	result := RPTestHelper get: '/env/search/SmapratMockClass' on: self api.
	contents := Json readFrom: result contents contents readStream.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	self assert: (contents at: 'categories') isEmpty.
	self assert: (contents at: 'methods') isEmpty.
	self assert: (contents at: 'classes') equals: #('SmapratMockClass').
	
	result := RPTestHelper get: '/env/search/MockClass%mment' on: self api.
	contents := Json readFrom: result contents contents readStream.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	self assert: (contents at: 'categories') isEmpty.
	self assert: (contents at: 'methods') isEmpty.
	self assert: #('MockClassNoComment') equals: (contents at: 'classes').