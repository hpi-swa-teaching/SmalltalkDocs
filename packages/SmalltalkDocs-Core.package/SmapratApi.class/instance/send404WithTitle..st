handler
send404WithTitle: aString
	| bodyJson |
	bodyJson := Dictionary newFrom: {
		'status' -> 404. 
		'title' ->aString. 
		'type' -> 'about:blank'}.
	bodyJson := bodyJson asJsonString.
	self
		status: 404;
		contentType: 'application/error+json';
		body:  bodyJson contents;
		headersPut: self settings globalHeaders.