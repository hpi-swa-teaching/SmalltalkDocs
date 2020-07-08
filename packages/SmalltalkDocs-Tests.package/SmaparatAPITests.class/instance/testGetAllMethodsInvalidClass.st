testing GetMethods
testGetAllMethodsInvalidClass
	| result contents |
	result := RPTestHelper get: '/env/classes/', self nonexistingClassName, '/methods' on: self api.
	self assert: result status = #notFound.
	self assert: result contentType = 'application/error+json'.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'status') = 404).
	self assert: ((contents at: 'title') = 'The requested class does not exist.').
	self assert: ((contents at: 'type') = 'about:blank').
