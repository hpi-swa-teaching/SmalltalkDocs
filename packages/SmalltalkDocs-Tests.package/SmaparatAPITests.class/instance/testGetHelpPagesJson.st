testing
testGetHelpPagesJson

	| result |
	result := RPTestHelper get: '/help/MockHelpBook/pages' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	self assert: result contents contents = '{"pages":{"second":{"isGivenByClass":"true"},"first":{"isGivenByClass":"true"}}}'.
	
	