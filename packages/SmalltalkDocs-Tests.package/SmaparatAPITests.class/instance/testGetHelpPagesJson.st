testing
testGetHelpPagesJson

	| result |
	result := RPTestHelper get: '/help/MockHelpBook/pages' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	self assert: result contents contents = '{"pages":[{"pageName":"first","isGivenByClass":true},{"pageName":"second","isGivenByClass":true},{"pageName":"MockSubHelpBook","isGivenByClass":false}]}'.
	
	