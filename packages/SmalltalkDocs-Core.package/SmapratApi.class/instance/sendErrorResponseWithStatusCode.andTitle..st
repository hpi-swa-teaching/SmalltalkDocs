error response
sendErrorResponseWithStatusCode: aStatusCode andTitle: aString
	| bodyJson |
	bodyJson := Dictionary newFrom: {
		'status' -> aStatusCode. 
		'title' -> aString. 
		'type' -> 'about:blank'}.
	bodyJson := bodyJson asJsonString.
	self
		status: aStatusCode;
		contentType: 'application/error+json';
		body:  bodyJson contents;
		headersPut: self settings globalHeaders.