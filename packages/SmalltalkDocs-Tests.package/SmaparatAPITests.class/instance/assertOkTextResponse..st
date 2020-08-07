asserting
assertOkTextResponse: aResponse
	self assert: aResponse status = #ok.
	self assert: aResponse contentType = 'text/plain'.