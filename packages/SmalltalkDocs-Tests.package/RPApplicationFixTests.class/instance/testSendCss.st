accessing
testSendCss
	| result |
	result := RPTestHelper get: '/css' on: self app.
	self assert: result status = #ok.
	self assert: result contentType = 'text/css'