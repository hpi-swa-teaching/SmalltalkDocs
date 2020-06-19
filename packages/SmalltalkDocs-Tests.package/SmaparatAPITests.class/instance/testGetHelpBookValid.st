testing GetHelpBook
testGetHelpBookValid
	| result contents |
	result := RPTestHelper get: '/help/MockHelpBook' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: (contents at: 'bookName') = 'first Book'.
	self assert: (contents at: 'priority') = 1.
	
	