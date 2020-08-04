error response
sendNotFoundResponseWithTitle: aString
	self sendErrorResponseWithStatusCode: (HttpResponse statusCodeFor: #notFound) asInteger andTitle: 'The requested class is not a HelpBook.'.