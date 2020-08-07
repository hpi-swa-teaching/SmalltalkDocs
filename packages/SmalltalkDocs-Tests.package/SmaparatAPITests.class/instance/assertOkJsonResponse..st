asserting
assertOkJsonResponse: aResponse
	self assert: aResponse status = #ok.
	self assert: aResponse contentType = 'application/json'.