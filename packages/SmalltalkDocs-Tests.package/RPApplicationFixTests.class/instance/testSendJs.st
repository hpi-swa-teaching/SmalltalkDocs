accessing
testSendJs
	| result |
	result := RPTestHelper get: '/js' on: self app.
	self assert: result status = #ok.
	self assert: result contentType = 'text/javascript'