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
		headersAt: 'server' put: self name;
		headersAt: 'Access-Control-Allow-Origin' put: '*'.