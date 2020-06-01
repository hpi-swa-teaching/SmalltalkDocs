testing
testGetClassInfo
	| result contents |
	result := RPTestHelper get: '/env/classes/MockClass' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'isHelpBook') = false).
	
	result := RPTestHelper get: '/env/classes/MockHelpBook' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'isHelpBook') = true).