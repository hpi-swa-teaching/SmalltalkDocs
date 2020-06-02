testing
testErrorGetMethodInfo
	| result contents className |
	className := 'invalidClassName12567'.
	[Environment current hasClassNamed: className] whileTrue: [className := ('invalidClassName12567','2')].
	result := RPTestHelper get: '/env/classes/',className,'/methods/instance/method2' on: api.
	self assert: result contentType = 'application/error+json'.
	self assert: result status = #notFound.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'status') = 404).
	self assert: ((contents at: 'title') = 'The requested class does not exist.').
	self assert: ((contents at: 'type') = 'about:blank').
	
	result := RPTestHelper get: '/env/classes/MockClass/methods/instance/invalidMethodThatDoesNotExist' on: api.
	self assert: result contentType = 'application/error+json'.
	self assert: result status = #notFound.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'status') = 404).
	self assert: ((contents at: 'title') = 'The requested method does not exist.').
	self assert: ((contents at: 'type') = 'about:blank').
	
	result := RPTestHelper get: '/env/classes/',className,'/methods/class/method2' on: api.
	self assert: result contentType = 'application/error+json'.
	self assert: result status = #notFound.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'status') = 404).
	self assert: ((contents at: 'title') = 'The requested class does not exist.').
	self assert: ((contents at: 'type') = 'about:blank').
	
	result := RPTestHelper get: '/env/classes/MockClass/methods/class/invalidMethodThatDoesNotExist' on: api.
	self assert: result contentType = 'application/error+json'.
	self assert: result status = #notFound.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'status') = 404).
	self assert: ((contents at: 'title') = 'The requested method does not exist.').
	self assert: ((contents at: 'type') = 'about:blank').