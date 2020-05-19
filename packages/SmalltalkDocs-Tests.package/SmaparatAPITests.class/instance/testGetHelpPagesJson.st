testing
testGetHelpPagesJson

	| result |
	result := RPTestHelper get: '/help/MockHelpBook/pages' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	self halt.
	self assert: result contents contents = '{"pages":["first","second"]}'.
	
	