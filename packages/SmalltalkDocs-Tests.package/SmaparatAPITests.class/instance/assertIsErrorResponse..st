asserting
assertIsErrorResponse: aResponse
	self assert: aResponse contentType = 'application/error+json'.