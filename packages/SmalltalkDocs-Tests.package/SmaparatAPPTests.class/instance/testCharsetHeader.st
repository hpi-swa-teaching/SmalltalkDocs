testing Headers
testCharsetHeader
	| result |
	result := RPTestHelper get: '/beautifullRoute' on: self app.
	self assert: (result fields keys includes: 'charset').
	self assert: (result fields at: 'charset') equals: 'utf-8'.
