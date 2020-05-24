testing
testGetMethods

	| result contents |
	result := RPTestHelper get: '/env/classes/MockClass/methods' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: (MockClass methodDict keys reject: [:method | (contents at: 'instanceMethods') includes: method asString]) isEmpty.
	self assert: (MockClass class methodDict keys reject: [:method | (contents at: 'classMethods') includes: method asString]) isEmpty.
	self assert: ((contents at: 'count') at: 'total') = (MockClass methodDict size + MockClass class methodDict size ).
	self assert: ((contents at: 'count') at: 'instanceMethods') = MockClass methodDict size.
	self assert: ((contents at: 'count') at: 'classMethods') = MockClass class methodDict size.