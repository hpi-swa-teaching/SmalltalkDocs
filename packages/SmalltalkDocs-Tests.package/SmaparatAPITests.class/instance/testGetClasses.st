testing GetClasses
testGetClasses
	| result contents |
	result := RPTestHelper get: '/env/classes' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: (Environment current allClasses reject: [:class | (contents at: 'classes') includes: class name asString]) isEmpty.
	self assert: (contents at: 'count') = Environment current allClasses size.