testing GetMethodInfo
testGetMethodInfoClassMethodNoComment
	| result contents |
	result := RPTestHelper get: '/env/classes/SmapratMockClass/methods/class/classMethod1' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: (contents at: 'precodeComment') = nil.
	self assert: (contents at: 'hasPrecodeComment') = false.