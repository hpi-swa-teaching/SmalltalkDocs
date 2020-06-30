testing GetMethodInfo
testGetMethodInfoClassMethodWithComment
	| result contents |
	result := RPTestHelper get: '/env/classes/SmapratMockClass/methods/class/classMethod4:' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: (contents at: 'precodeComment') = 'I have an Argument and a classComment'.
	self assert: (contents at: 'hasPrecodeComment') = true.