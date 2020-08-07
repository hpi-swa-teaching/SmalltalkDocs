asserting
assertBadRequestIn: aResponse withTitle: aString
	| content |
	self assert: aResponse contentType = self errorResponseType.
	self assert: aResponse status = #badRequest.
	content := Json readFrom: aResponse contents contents readStream.
	self assert: (content at: 'status') equals: (HttpResponse statusCodeFor: #badRequest) asInteger.
	self assert: (content at: 'title') equals: aString.
	self assert: (content at: 'type') equals: 'about:blank'.