testing GetMethodInfo
testGetMethodInfoInstanceMethodNoComment
	| result contents |
	result := RPTestHelper get: '/env/classes/MockClass/methods/instance/method1' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: (contents at: 'precodeComment') = nil.
	self assert: (contents at: 'hasPrecodeComment') = false.