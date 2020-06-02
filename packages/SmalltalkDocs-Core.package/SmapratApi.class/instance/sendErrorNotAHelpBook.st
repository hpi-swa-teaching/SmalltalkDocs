handler
sendErrorNotAHelpBook
	| bodyJson |
	bodyJson := Dictionary newFrom: {
		'status' -> 400. 
		'title' ->'The requested class is not a HelpBook.'. 
		'type' -> 'about:blank'}.
	bodyJson := bodyJson asJsonString.
	self
		status: 400;
		contentType: 'application/error+json';
		body:  bodyJson contents;
		headersAt: 'server' put: self name;
		headersAt: 'Access-Control-Allow-Origin' put: '*'.