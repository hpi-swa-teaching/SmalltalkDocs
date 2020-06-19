testing GetMethodInfo
testGetMethodInfoInvalidClassInstanceMethod
	| result contents  |
	result := RPTestHelper get: '/env/classes/', self nonexistingClassName, '/methods/instance/method2' on: api.
	self assert: result contentType = 'application/error+json'.
	self assert: result status = #notFound.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'status') = 404).
	self assert: ((contents at: 'title') = 'The requested class does not exist.').
	self assert: ((contents at: 'type') = 'about:blank').