asserting
assertNotFoundIn: aResponse withExpectedTitle: aString
	| content |
	self assert: aResponse contentType equals: self errorResponseType.
	self assert: aResponse status equals: #notFound.
	content := Json readFrom: aResponse contents contents readStream.
	self assert: (content at: 'status') equals: (HttpResponse statusCodeFor: #notFound) asInteger.
	self assert: (content at: 'type') equals: 'about:blank'.
	self assert: (content at: 'title') equals: aString.