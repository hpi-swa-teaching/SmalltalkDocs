testing Headers
testCrossOriginHeader
	| result |
	result := RPTestHelper get: '/immobilee' on: self app.
	self assert: (result fields keys includes: 'access-control-allow-origin').
	self assert: (result fields at: 'access-control-allow-origin') equals: self app allowedDomains.