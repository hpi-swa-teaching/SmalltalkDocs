error response
sendNotFoundResponseWithTitle: aString
	self sendErrorResponseWithStatusCode: (HttpResponse statusCodeFor: #notFound) asInteger andTitle: aString.