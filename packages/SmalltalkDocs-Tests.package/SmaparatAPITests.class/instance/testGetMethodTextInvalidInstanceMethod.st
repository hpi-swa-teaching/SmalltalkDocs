testing GetMethodText
testGetMethodTextInvalidInstanceMethod
	| result contents |
	result := RPTestHelper get: '/env/classes/SmapratMockClass/methods/instance/invalidMethodThatDoesNotExist/text' on: api.
	self assert: result contentType = 'application/error+json'.
	self assert: result status = #notFound.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'status') = 404).
	self assert: ((contents at: 'title') = 'The requested method does not exist.').
	self assert: ((contents at: 'type') = 'about:blank').