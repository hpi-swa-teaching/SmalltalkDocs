testing
testGetMethodInfo
	| result contents |
	result := RPTestHelper get: '/env/classes/MockClass/methods/instance/method2' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: (contents at: 'precodeComment') = 'I have a Comment'.
	self assert: (contents at: 'hasPrecodeComment') = true.
	
	result := RPTestHelper get: '/env/classes/MockClass/methods/instance/method1' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: (contents at: 'precodeComment') = nil.
	self assert: (contents at: 'hasPrecodeComment') = false.
	
	result := RPTestHelper get: '/env/classes/MockClass/methods/class/classMethod4:' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: (contents at: 'precodeComment') = 'I have an Argument and a classComment'.
	self assert: (contents at: 'hasPrecodeComment') = true.
	
	result := RPTestHelper get: '/env/classes/MockClass/methods/class/classMethod1' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: (contents at: 'precodeComment') = nil.
	self assert: (contents at: 'hasPrecodeComment') = false.