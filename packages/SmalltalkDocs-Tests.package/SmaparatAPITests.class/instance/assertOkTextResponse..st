asserting
assertOkTextResponse: aResponse
	self assert: aResponse status equals: #ok.
	self assert: aResponse contentType equals: 'text/plain'.