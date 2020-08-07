asserting
assertNotFoundIn: aResponse withExpectedTitle: aString
	| content |
	self assert: aResponse contentType = self errorResponseType.
	self assert: aResponse status = #notFound.
	content := Json readFrom: aResponse contents contents readStream.
	self assert: (content at: 'status') = (HttpResponse statusCodeFor: #notFound) asInteger.
	self assert: (content at: 'type') = 'about:blank'.
	self assert: (content at: 'title') = aString.