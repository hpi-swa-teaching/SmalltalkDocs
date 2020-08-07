asserting
assertBadRequestIn: aResponse withTitle: aString
	| content |
	self assert: aResponse contentType equals: self errorResponseType.
	self assert: aResponse status equals: #badRequest.
	content := Json readFrom: aResponse contents contents readStream.
	self assert: (content at: 'status') equals: (HttpResponse statusCodeFor: #badRequest) asInteger.
	self assert: (content at: 'title') equals: aString.
	self assert: (content at: 'type') equals: 'about:blank'.