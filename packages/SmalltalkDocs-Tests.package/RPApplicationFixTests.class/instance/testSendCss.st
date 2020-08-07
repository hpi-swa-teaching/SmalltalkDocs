testing
testSendCss
	| result |
	result := RPTestHelper get: '/css' on: self app.
	self assert: result status equals: #ok.
	self assert: result contentType equals: 'text/css'