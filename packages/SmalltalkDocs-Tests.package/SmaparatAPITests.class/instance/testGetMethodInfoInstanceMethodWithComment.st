testing GetMethodInfo
testGetMethodInfoInstanceMethodWithComment
	| result contents |
	result := RPTestHelper get: '/env/classes/MockClass/methods/instance/method2' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: (contents at: 'precodeComment') = 'I have a Comment'.
	self assert: (contents at: 'hasPrecodeComment') = true.