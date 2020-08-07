testing
testSendJs
	| result |
	result := RPTestHelper get: '/js' on: self app.
	self assert: result status equals: #ok.
	self assert: result contentType equals: 'text/javascript'