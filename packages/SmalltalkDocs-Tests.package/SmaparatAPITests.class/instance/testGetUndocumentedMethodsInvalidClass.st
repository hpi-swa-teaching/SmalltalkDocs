testing GetUndocumentedMethods
testGetUndocumentedMethodsInvalidClass
	| result contents |
	result := RPTestHelper get: '/statistics/undocumented/methods/',self nonexistingClassName on: self api.
	self assert: result status = #notFound.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'status') = 404).
	self assert: ((contents at: 'title') = 'The requested class does not exist.').
	self assert: ((contents at: 'type') = 'about:blank'). 
