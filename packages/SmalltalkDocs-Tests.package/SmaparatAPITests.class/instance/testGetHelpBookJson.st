testing
testGetHelpBookJson

	| result |
	result := RPTestHelper get: '/help/MockHelpBook' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	self assert: result contents contents = '{"bookName":"first Book","priority":1}'.
	
	