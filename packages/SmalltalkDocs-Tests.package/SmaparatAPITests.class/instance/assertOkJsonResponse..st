asserting
assertOkJsonResponse: aResponse
	self assert: aResponse status equals: #ok.
	self assert: aResponse contentType equals: 'application/json'.