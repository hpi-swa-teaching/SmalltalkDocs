error response
sendErrorNotAHelpBook
	self sendErrorResponseWithStatusCode: (HttpResponse statusCodeFor: #badRequest) asInteger andTitle: 'The requested class is not a HelpBook.'.