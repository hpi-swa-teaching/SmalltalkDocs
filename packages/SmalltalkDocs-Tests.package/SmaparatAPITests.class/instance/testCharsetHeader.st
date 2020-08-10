testing Headers
testCharsetHeader
	| result |
	result := RPTestHelper get: '/env/classes/SmapratMockClass/methods/instance/method1/text' on: api.
	self assert: (result fields keys includes: 'charset').
	self assert: (result fields at: 'charset') equals: 'utf-8'.
