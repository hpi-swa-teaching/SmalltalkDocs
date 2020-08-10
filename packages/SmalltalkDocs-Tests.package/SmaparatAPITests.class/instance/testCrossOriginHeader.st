testing Headers
testCrossOriginHeader
	| result |
	result := self getFrom: '/env/classes'.
	self assert: (result fields keys includes: 'access-control-allow-origin').
	self assert: (result fields at: 'access-control-allow-origin') equals: self api allowedDomains.